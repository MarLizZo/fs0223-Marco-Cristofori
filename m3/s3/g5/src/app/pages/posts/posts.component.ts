import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
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

  constructor(private postsvc: PostService, private authsvc: AuthService) {}

  ngOnInit() {
    this.getSub = this.postsvc.getPosts().subscribe((res) => {
      this.postArr = res;
    });
    this.getIfLogged();
  }

  ngOnDestroy() {
    if (this.getSub) this.getSub.unsubscribe();
    if (this.ownerSub) this.ownerSub.unsubscribe();
    if (this.userSub) this.userSub.unsubscribe();
  }

  getIfLogged() {
    this.userSub = this.authsvc.isLogged$.subscribe(
      (res) => (this.isLogged = res)
    );
  }

  getIsOwner(post: IPost): boolean {
    let res: boolean = false;
    this.authsvc.user$.subscribe((v) => {
      v?.user.id == post.owner.id ? (res = true) : (res = false);
    });
    return res;
  }

  getIsAdmin(): boolean {
    let res: boolean = false;
    this.authsvc.user$.subscribe((v) => {
      v?.user.isadmin ? (res = true) : (res = false);
    });
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
