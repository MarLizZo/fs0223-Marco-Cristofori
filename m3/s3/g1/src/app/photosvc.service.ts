import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './Models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosvcService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }

  deletePhoto(photo: Photo) {
    return this.http.delete(`${this.apiUrl}/${photo.id}`);
  }
}
