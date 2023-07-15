import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMediaData } from 'src/app/Interfaces/imedia-data';

@Component({
  selector: 'app-single-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent {
  constructor() {}
  path: string = './assets/media/';
  @Input() media!: IMediaData;

  ngOnInit() {
    this.path += this.media.name;
  }

  @Output() onChange = new EventEmitter();

  setLike() {
    this.media.isLike = !this.media.isLike;
    this.onChange.emit(this.media);
  }
  setOnList() {
    this.media.isOnMyList = !this.media.isOnMyList;
    this.onChange.emit(this.media);
  }
}
