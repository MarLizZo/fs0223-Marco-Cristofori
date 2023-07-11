import { Component } from '@angular/core';
import { IMediaData } from 'src/app/Interfaces/imedia-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  firstArr: IMediaData[] = [
    {
      name: 'media0.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media1.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media2.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media3.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media4.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media5.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media6.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media7.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media8.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media9.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media10.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media11.jpg',
      isOnMyList: false,
      isLike: false,
    },
  ];
  secondArr: IMediaData[] = [
    {
      name: 'media12.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media13.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media14.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media15.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media16.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media17.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media18.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media19.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media20.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media21.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media22.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media23.webp',
      isOnMyList: false,
      isLike: false,
    },
  ];
  thirdArr: IMediaData[] = [
    {
      name: 'media24.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media25.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media26.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media27.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media28.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media29.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media30.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media31.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media32.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media0.webp',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media1.jpg',
      isOnMyList: false,
      isLike: false,
    },
    {
      name: 'media2.webp',
      isOnMyList: false,
      isLike: false,
    },
  ];
  fourthArr: IMediaData[] = [
    ...this.firstArr.slice(0, 6),
    ...this.secondArr.slice(6, 12),
  ];
  fifthArr: IMediaData[] = [
    ...this.secondArr.slice(0, 6),
    ...this.thirdArr.slice(6, 12),
  ];
  sixthArr: IMediaData[] = [
    ...this.thirdArr.slice(0, 6),
    ...this.firstArr.slice(6, 12),
  ];
}
