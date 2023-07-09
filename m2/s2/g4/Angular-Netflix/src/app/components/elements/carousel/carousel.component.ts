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
  firstHalf!: IMediaData[];
  secondHalf!: IMediaData[];

  ngOnInit() {
    this.firstHalf = this.mediaArr.slice(0, 6);
    this.secondHalf = this.mediaArr.slice(6, 11);
  }
}
