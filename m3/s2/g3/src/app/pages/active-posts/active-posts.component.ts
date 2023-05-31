import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsServiceService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  activePosts: Post[] = [];
  private PostService: PostsServiceService = new PostsServiceService();

  constructor() {
    this.activePosts = this.PostService.getPosts(true);
  }

  disablePost(id: number): void {
    console.log(id);

    this.activePosts[this.activePosts.findIndex((p) => p.id === id)].active =
      false;
  }
}
