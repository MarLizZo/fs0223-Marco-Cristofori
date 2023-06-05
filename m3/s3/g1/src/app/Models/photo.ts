import { IPhoto } from './iphoto';

export class Photo implements IPhoto {
  albumId: number;
  title: string;
  id?: number;
  url: string;
  thumbnailUrl: string;

  constructor(
    _albumId: number,
    _title: string,
    _url: string,
    _thumbnailUrl: string,
    _id?: number
  ) {
    this.albumId = _albumId;
    this.title = _title;
    this.url = _url;
    this.thumbnailUrl = _thumbnailUrl;
    this.id = _id;
  }
}
