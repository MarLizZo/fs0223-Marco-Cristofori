import { Component, Input } from '@angular/core';
import { SingleCardComponent } from '../single-card/single-card.component';
import { IMediaData } from 'src/app/Interfaces/imedia-data';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SingleCardComponent, CommonModule, NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  constructor() {}

  @Input() mediaArr!: IMediaData[];
  mediaArrMobile_one!: IMediaData[];
  mediaArrMobile_two!: IMediaData[];
  mediaArrMobile_three!: IMediaData[];
  mediaArrMobile_four!: IMediaData[];

  mediaArrTablet_one!: IMediaData[];
  mediaArrTablet_two!: IMediaData[];
  mediaArrTablet_three!: IMediaData[];

  mediaArrLarge_one!: IMediaData[];
  mediaArrLarge_two!: IMediaData[];

  ngOnInit() {
    this.mediaArrMobile_one = this.mediaArr.slice(0, 2);
    this.mediaArrMobile_two = this.mediaArr.slice(3, 5);
    this.mediaArrMobile_three = this.mediaArr.slice(6, 8);
    this.mediaArrMobile_four = this.mediaArr.slice(9, 11);

    this.mediaArrTablet_one = this.mediaArr.slice(0, 3);
    this.mediaArrTablet_two = this.mediaArr.slice(4, 7);
    this.mediaArrTablet_three = this.mediaArr.slice(8, 11);

    this.mediaArrLarge_one = this.mediaArr.slice(0, 5);
    this.mediaArrLarge_two = this.mediaArr.slice(6, 11);
  }
}
