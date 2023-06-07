import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  activePosts: Post[] = [];
  // private ps = new PostsService();

  constructor(private ps: PostsService) {}

  ngOnInit() {
    this.activePosts = this.ps.getPosts(true);
  }

  disablePost(post: Post): void {
    this.ps.updateStatus(post);
    this.activePosts = this.ps.getPosts(true);
  }
}
