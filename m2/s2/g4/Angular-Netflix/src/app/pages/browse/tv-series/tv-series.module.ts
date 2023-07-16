import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvSeriesRoutingModule } from './tv-series-routing.module';
import { TvSeriesComponent } from './tv-series.component';
import { CarouselComponent } from 'src/app/components/elements/carousel/carousel.component';

@NgModule({
  declarations: [TvSeriesComponent],
  imports: [CommonModule, TvSeriesRoutingModule, CarouselComponent],
})
export class TvSeriesModule {}
