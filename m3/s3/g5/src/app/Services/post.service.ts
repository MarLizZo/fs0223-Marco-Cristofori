import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../Models/ipost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl);
  }

  getSinglePost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.apiUrl + '/' + id);
  }

  createPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.apiUrl, post);
  }

  editPost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(this.apiUrl + '/' + post.id, post);
  }

  deletePost(post: IPost): Observable<IPost> {
    return this.http.delete<IPost>(this.apiUrl + '/' + post.id);
  }
}
