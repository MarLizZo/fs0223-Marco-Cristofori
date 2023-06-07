import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  inactivePosts: Post[] = [];
  // private ps = new PostsService();

  constructor(private ps: PostsService) {}

  ngOnInit() {
    this.inactivePosts = this.ps.getPosts(false);
  }

  enablePost(post: Post): void {
    this.ps.updateStatus(post);
    this.inactivePosts = this.ps.getPosts(false);
  }
}
