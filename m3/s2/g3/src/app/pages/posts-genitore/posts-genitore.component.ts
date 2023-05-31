import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsServiceService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-posts-genitore',
  templateUrl: './posts-genitore.component.html',
  styleUrls: ['./posts-genitore.component.scss'],
})
export class PostsGenitoreComponent {
  activePosts: Post[] = [];
  private PostService: PostsServiceService = new PostsServiceService();

  ngOnInit() {
    this.activePosts = this.PostService.getPosts(true);
  }
}
