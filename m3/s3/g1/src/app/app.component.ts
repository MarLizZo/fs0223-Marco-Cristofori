import { Component } from '@angular/core';
import { Photo } from './Models/photo';
import { PhotosvcService } from './photosvc.service';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photoArr: Photo[] = [];
  likedPhotoArr: Photo[] = [];
  sub!: Subscription;
  likeCounter: number = 0;

  constructor(private svc: PhotosvcService) {}

  ngOnInit() {
    const obs = this.svc
      .getPhotos()
      .pipe(map((val) => val.filter((v) => v.id! < 20)))
      .subscribe((res) => {
        this.photoArr = res;
      });
    this.sub = obs;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  like(photo: Photo, event: any) {
    if (!this.likedPhotoArr.find((v) => v === photo)) {
      this.likedPhotoArr.push(photo);
      event.target.innerText = 'Remove Like';
    } else {
      this.likedPhotoArr.splice(
        this.likedPhotoArr.findIndex((v) => v.id == photo.id),
        1
      );
      event.target.innerText = 'Like Photo';
    }
  }

  del(photo: Photo) {
    this.photoArr.splice(
      this.photoArr.findIndex((val) => val.id == photo.id),
      1
    );
    this.svc.deletePhoto(photo);
  }
}
