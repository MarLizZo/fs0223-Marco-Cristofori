import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestRoutingModule } from './latest-routing.module';
import { LatestComponent } from './latest.component';
import { CarouselComponent } from 'src/app/components/elements/carousel/carousel.component';

@NgModule({
  declarations: [LatestComponent],
  imports: [CommonModule, LatestRoutingModule, CarouselComponent],
})
export class LatestModule {}
