import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsServiceService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  inactivePosts: Post[] = [];
  private PostService: PostsServiceService = new PostsServiceService();

  constructor() {
    this.inactivePosts = this.PostService.getPosts(false);
  }

  enablePost(): void {
    //
  }
}
