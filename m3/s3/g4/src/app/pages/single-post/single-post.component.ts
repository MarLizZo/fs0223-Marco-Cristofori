import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/post';
import { PostsService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
  s_posts: Post[] = [];

  constructor(private ps: PostsService, private router: ActivatedRoute) {
    //
  }

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.s_posts.push(this.ps.getSinglePost(params.id));
    });
  }
}
