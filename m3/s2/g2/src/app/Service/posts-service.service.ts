import { Injectable } from '@angular/core';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsServiceService {
  apiUrl: string = '../../assets/db.json';
  allPosts: Post[] = [];

  getAllPosts(): Promise<Post[]> {
    return fetch(this.apiUrl)
      .then((res) => res.json())
      .then((res) => (this.allPosts = res));
  }

  getActivePosts(): Post[] {
    return this.allPosts.filter((obj) => obj.active);
  }

  getInactivePosts(): Post[] {
    return this.allPosts.filter((obj) => !obj.active);
  }
}
