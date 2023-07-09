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
}
