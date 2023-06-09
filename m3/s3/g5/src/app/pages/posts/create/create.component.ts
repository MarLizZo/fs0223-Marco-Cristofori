import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/Models/ipost';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor(
    private postsvc: PostService,
    private authsvc: AuthService,
    private router: Router
  ) {}

  userSub!: Subscription;
  postSub!: Subscription;

  ngOnDestroy() {
    if (this.userSub) this.userSub.unsubscribe();
    if (this.postSub) this.postSub.unsubscribe();
  }

  data: IPost = {
    title: '',
    content: '',
    owner: {
      email: '',
      realname: '',
      username: '',
      id: 0,
      isadmin: false,
    },
  };

  create() {
    this.userSub = this.authsvc.user$.subscribe((res) => {
      this.data.owner = res!.user;
      this.postSub = this.postsvc.createPost(this.data).subscribe((resPost) => {
        this.router.navigate(['posts']);
      });
    });
  }
}
