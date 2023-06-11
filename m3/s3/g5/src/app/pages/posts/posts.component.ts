import { Component } from '@angular/core';
import { Subscription, catchError, map, tap } from 'rxjs';
import { IPost } from 'src/app/Models/ipost';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  postArr: IPost[] = [];
  getSub!: Subscription;
  userSub!: Subscription;
  ownerSub!: Subscription;
  isLogged: boolean = false;
  isPageLoading: boolean = true;
  isArrLoading: boolean = true;
  isUserInfoLoading: boolean = true;
  isError: boolean = false;
  alertTitle: string = '';
  alertBody: string = '';

  constructor(private postsvc: PostService, private authsvc: AuthService) {}

  ngOnInit() {
    setTimeout(() => (this.isPageLoading = false), 2000);
    this.getSub = this.postsvc
      .getPosts()
      .pipe(
        tap((res) => {
          this.postArr = res;
          this.isArrLoading = false;
          this.getIfLogged();
        }),
        catchError((error) => {
          this.alertTitle = 'Error loading content';
          this.alertBody = 'Server is probably non responding..';
          this.isArrLoading = false;
          this.isUserInfoLoading = false;
          this.isError = true;
          throw error;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.getSub) this.getSub.unsubscribe();
    if (this.ownerSub) this.ownerSub.unsubscribe();
    if (this.userSub) this.userSub.unsubscribe();
  }

  getIfLogged() {
    this.userSub = this.authsvc.isLogged$
      .pipe(
        tap((res) => {
          this.isLogged = res;
          this.isUserInfoLoading = false;
        }),
        catchError((err) => {
          this.isLogged = false;
          this.isArrLoading = false;
          this.isUserInfoLoading = false;
          this.isError = true;
          throw err;
        })
      )
      .subscribe();
  }

  getIsOwner(post: IPost): boolean {
    let res: boolean = false;
    this.authsvc.user$
      .pipe(
        tap((v) => {
          v?.user.id == post.owner.id ? (res = true) : (res = false);
        }),
        catchError((err) => {
          this.isArrLoading = false;
          this.isUserInfoLoading = false;
          this.isError = true;
          throw err;
        })
      )
      .subscribe();
    return res;
  }

  getIsAdmin(): boolean {
    let res: boolean = false;
    this.authsvc.user$
      .pipe(
        tap((v) => {
          v?.user.isadmin ? (res = true) : (res = false);
        }),
        catchError((err) => {
          this.isArrLoading = false;
          this.isUserInfoLoading = false;
          this.isError = true;
          throw err;
        })
      )
      .subscribe();
    return res;
  }

  deletePost(post: IPost) {
    this.postsvc.deletePost(post).subscribe().unsubscribe();
    this.postArr.splice(
      this.postArr.findIndex((v) => v.id == post.id),
      1
    );
  }
}
