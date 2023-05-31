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
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'education',
    },
    {
      id: 3,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'education',
    },
    {
      id: 4,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
    },
    {
      id: 5,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'politic',
    },
    {
      id: 6,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'politic',
    },
    {
      id: 7,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'education',
    },
    {
      id: 8,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'news',
    },
    {
      id: 9,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'politic',
    },
    {
      id: 10,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
    },
    {
      id: 11,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'education',
    },
    {
      id: 12,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'news',
    },
    {
      id: 13,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'news',
    },
    {
      id: 14,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: true,
      type: 'politic',
    },
    {
      id: 15,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat interdum odio, in blandit mauris venenatis ac. Curabitur porttitor tincidunt turpis, quis auctor dui mollis laoreet. Nunc facilisis enim ut felis ultricies porttitor. Sed dictum.',
      title: 'lorem',
      active: false,
      type: 'education',
    },
  ];

  getPosts(active: boolean): Post[] {
    return active
      ? this.allPosts.filter((obj) => obj.active)
      : this.allPosts.filter((obj) => !obj.active);
  }

  updateStatus(post: Post): void {
    post.active = !post.active;
    let i = this.allPosts.findIndex((p) => p.id == post.id);
    this.allPosts.splice(i, 1, post);
  }
}
