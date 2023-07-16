import { Component } from '@angular/core';
import { IMediaData } from 'src/app/Interfaces/imedia-data';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss'],
})
export class TvSeriesComponent {
  firstArr: IMediaData[] = [];
  secondArr: IMediaData[] = [];
  thirdArr: IMediaData[] = [];
  fourthArr: IMediaData[] = [];
  fifthArr: IMediaData[] = [];

  ngOnInit() {
    let media_one: string | null = localStorage.getItem('media_one');
    let media_two: string | null = localStorage.getItem('media_two');
    let media_three: string | null = localStorage.getItem('media_three');

    if (media_one && media_two && media_three) {
      this.firstArr = JSON.parse(media_one);
      this.secondArr = JSON.parse(media_two);
      this.thirdArr = JSON.parse(media_three);
    } else {
      this.firstArr = [
        {
          name: 'media0.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 90,
          genres: ['Commedia', 'Famiglia'],
        },
        {
          name: 'media1.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 83,
          genres: ['Suspence', 'Cupo'],
        },
        {
          name: 'media2.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 88,
          genres: ['Sci-fi', 'Futuristico'],
        },
        {
          name: 'media3.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 96,
          genres: ['Fiction', 'Adulti'],
        },
        {
          name: 'media4.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 95,
          genres: ['Thriller', 'Suspence'],
        },
        {
          name: 'media5.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 91,
          genres: ['Fantasy'],
        },
        {
          name: 'media6.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 90,
          genres: ['Cupo', 'Fantasy', 'Suspence'],
        },
        {
          name: 'media7.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 93,
          genres: ['Poliziesco', 'Thriller'],
        },
        {
          name: 'media8.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 89,
          genres: ['Giallo', 'Suspence'],
        },
        {
          name: 'media9.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 78,
          genres: ['Cartone', 'Bambini'],
        },
        {
          name: 'media10.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 79,
          genres: ['Commedia', 'Rilassante'],
        },
        {
          name: 'media11.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 72,
          genres: ['Fantasy', 'Drammatico'],
        },
      ];
      this.secondArr = [
        {
          name: 'media12.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 83,
          genres: ['Suspence', 'Drammatico'],
        },
        {
          name: 'media13.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 90,
          genres: ['Fantasy', 'Cupo'],
        },
        {
          name: 'media14.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 77,
          genres: ['Sci-fi', 'Drammatico'],
        },
        {
          name: 'media15.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 99,
          genres: ['Futuristico', 'Thriller'],
        },
        {
          name: 'media16.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 91,
          genres: ['Poliziesco', 'Adulti'],
        },
        {
          name: 'media17.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 70,
          genres: ['Anime', 'Drammatico'],
        },
        {
          name: 'media18.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 87,
          genres: ['Drammatico', 'Cupo'],
        },
        {
          name: 'media19.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 90,
          genres: ['Documentario', 'Famiglia'],
        },
        {
          name: 'media20.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 89,
          genres: ['Action', 'Suspence'],
        },
        {
          name: 'media21.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 67,
          genres: ['Anime', 'Cupo'],
        },
        {
          name: 'media22.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 87,
          genres: ['Storico', 'Documentario'],
        },
        {
          name: 'media23.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 69,
          genres: ['Sci-fi', 'Futuristico'],
        },
      ];
      this.thirdArr = [
        {
          name: 'media24.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 64,
          genres: ['Fantasy', 'Drammatico'],
        },
        {
          name: 'media25.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 49,
          genres: ['Sci-fi', 'Futuristico'],
        },
        {
          name: 'media26.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 98,
          genres: ['Anime', 'Cupo'],
        },
        {
          name: 'media27.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 81,
          genres: ['Commedia', 'Famiglia'],
        },
        {
          name: 'media28.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 76,
          genres: ['Sci-fi', 'Suspence'],
        },
        {
          name: 'media29.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 58,
          genres: ['Fiction', 'Adulti'],
        },
        {
          name: 'media30.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 74,
          genres: ['Commedia', 'Rilassante'],
        },
        {
          name: 'media31.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 85,
          genres: ['Fantasy', 'Futuristico'],
        },
        {
          name: 'media32.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 65,
          genres: ['Poliziesco', 'Drammatico'],
        },
        {
          name: 'media0.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 90,
          genres: ['Thriller', 'Suspence'],
        },
        {
          name: 'media1.jpg',
          isOnMyList: false,
          isLike: false,
          compatibility: 92,
          genres: ['Sci-fi', 'Drammatico'],
        },
        {
          name: 'media2.webp',
          isOnMyList: false,
          isLike: false,
          compatibility: 61,
          genres: ['Fiction', 'Famiglia'],
        },
      ];
    }

    this.setSecondaryArrs();
  }

  ngOnDestroy() {
    localStorage.setItem('media_one', JSON.stringify(this.firstArr));
    localStorage.setItem('media_two', JSON.stringify(this.secondArr));
    localStorage.setItem('media_three', JSON.stringify(this.thirdArr));
  }

  setMediaState(obj: IMediaData) {
    let match_one = this.firstArr.findIndex((el) => el.name === obj.name);
    let match_two = this.secondArr.findIndex((el) => el.name === obj.name);
    let match_three = this.thirdArr.findIndex((el) => el.name === obj.name);

    if (match_one > 0) {
      this.firstArr[match_one] = obj;
    }
    if (match_two > 0) {
      this.secondArr[match_two] = obj;
    }
    if (match_three > 0) {
      this.thirdArr[match_three] = obj;
    }

    this.setSecondaryArrs();
  }

  setSecondaryArrs() {
    this.fourthArr = [
      ...this.thirdArr.slice(6, 12),
      ...this.secondArr.slice(6, 12),
    ];
    this.fifthArr = [
      ...this.secondArr.slice(0, 6),
      ...this.firstArr.slice(6, 12),
    ];
  }
}
