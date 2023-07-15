import { Component } from '@angular/core';
import { IMediaData } from 'src/app/Interfaces/imedia-data';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent {
  myList: IMediaData[] = [];
  medias_one: IMediaData[] = [];
  medias_two: IMediaData[] = [];
  medias_three: IMediaData[] = [];

  ngOnInit() {
    let media_one: string | null = localStorage.getItem('media_one');
    let media_two: string | null = localStorage.getItem('media_two');
    let media_three: string | null = localStorage.getItem('media_three');

    if (media_one && media_two && media_three) {
      this.medias_one = JSON.parse(media_one);
      this.medias_two = JSON.parse(media_two);
      this.medias_three = JSON.parse(media_three);

      for (let o of this.medias_one) {
        if (o.isOnMyList) this.myList.push(o);
      }
      for (let o of this.medias_two) {
        if (o.isOnMyList) this.myList.push(o);
      }
      for (let o of this.medias_three) {
        if (o.isOnMyList) {
          if (this.myList.findIndex((el) => el.name == o.name) == -1)
            this.myList.push(o);
        }
      }
    }
  }

  ngOnDestroy() {
    localStorage.setItem('media_one', JSON.stringify(this.medias_one));
    localStorage.setItem('media_two', JSON.stringify(this.medias_two));
    localStorage.setItem('media_three', JSON.stringify(this.medias_three));
  }

  setProps(obj: IMediaData) {
    let match_one = this.medias_one.findIndex((el) => el.name === obj.name);
    let match_two = this.medias_two.findIndex((el) => el.name === obj.name);
    let match_three = this.medias_three.findIndex((el) => el.name === obj.name);

    this.myList.splice(
      this.myList.findIndex((el) => el.name == obj.name),
      1
    );

    if (match_one > 0) {
      this.medias_one[match_one] = obj;
    }
    if (match_two > 0) {
      this.medias_two[match_two] = obj;
    }
    if (match_three > 0) {
      this.medias_three[match_three] = obj;
    }
  }
}
