import { Component, Input } from '@angular/core';
import { IMediaData } from 'src/app/Interfaces/imedia-data';

@Component({
  selector: 'app-single-card',
  standalone: true,
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent {
  constructor() {}
  path: string = './assets/media/';
  @Input() media!: IMediaData;

  ngOnInit() {
    this.path += this.media.name;
    // this.setListener();
  }

  setListener() {
    let img: HTMLElement | null = document.querySelector('.main-container img');
    let div: HTMLElement | null = document.querySelector('.main-container');

    img?.addEventListener('mouseover', () => {
      div?.classList.add('cont-hover');
    });

    img?.addEventListener('mouseout', () => {
      div?.classList.remove('cont-hover');
    });
  }
}
