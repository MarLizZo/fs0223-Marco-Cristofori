import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/Models/ipost';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  data: IPost = {
    title: '',
    content: '',
    id: 0,
    owner: {
      email: '',
      realname: '',
      username: '',
      id: 0,
      isadmin: false,
    },
  };

  paramSub!: Subscription;
  postSub!: Subscription;
  saveSub!: Subscription;
  isPageLoading: boolean = true;
  isInfoLoading: boolean = true;

  constructor(
    private postsvc: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    setTimeout(() => (this.isPageLoading = false), 2000);
    this.paramSub = this.route.params.subscribe((param: any) => {
      this.postSub = this.postsvc.getSinglePost(param.id).subscribe((res) => {
        this.data = res;
        this.isInfoLoading = false;
      });
    });
  }

  ngOnDestroy() {
    if (this.paramSub) this.paramSub.unsubscribe();
    if (this.postSub) this.postSub.unsubscribe();
    if (this.saveSub) this.saveSub.unsubscribe();
  }

  savePost() {
    this.saveSub = this.postsvc.editPost(this.data).subscribe((res) => {
      this.router.navigate(['posts']);
    });
  }
}
