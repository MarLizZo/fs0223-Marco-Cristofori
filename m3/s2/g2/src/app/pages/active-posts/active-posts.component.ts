import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsServiceService } from 'src/app/Service/posts-service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  activePosts: Post[] = [];

  constructor(private ps: PostsServiceService) {
    ps.getAllPosts().then(() => {
      this.activePosts = ps.getActivePosts();
    });
  }
}
