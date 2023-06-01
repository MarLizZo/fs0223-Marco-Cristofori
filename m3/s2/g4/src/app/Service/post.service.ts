import { Injectable } from '@angular/core';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl: string = 'assets/db.json';
  allPosts: Post[] = [
    {
      id: 1,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
      author: 'admin',
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'education',
      author: 'user 1',
    },
    {
      id: 3,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'education',
      author: 'user 1',
    },
    {
      id: 4,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
      author: 'admin',
    },
    {
      id: 5,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'politic',
      author: 'user 2',
    },
    {
      id: 6,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'politic',
      author: 'admin',
    },
    {
      id: 7,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'education',
      author: 'user 3',
    },
    {
      id: 8,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'news',
      author: 'admin',
    },
    {
      id: 9,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'politic',
      author: 'user 1',
    },
    {
      id: 10,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
      author: 'admin',
    },
    {
      id: 11,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'education',
      author: 'user 3',
    },
    {
      id: 12,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
      author: 'admin',
    },
    {
      id: 13,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'news',
      author: 'user 2',
    },
    {
      id: 14,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'politic',
      author: 'admin',
    },
    {
      id: 15,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'education',
      author: 'user 1',
    },
  ];

  getPosts(active: boolean): Post[] {
    return active
      ? this.allPosts.filter((obj) => obj.active)
      : this.allPosts.filter((obj) => !obj.active);
  }

  getSinglePost(id: number): Post {
    return this.allPosts[this.allPosts.findIndex((val) => val.id == id)];
  }

  updateStatus(post: Post): void {
    post.active = !post.active;
    let i = this.allPosts.findIndex((p) => p.id == post.id);
    this.allPosts.splice(i, 1, post);
  }
}
