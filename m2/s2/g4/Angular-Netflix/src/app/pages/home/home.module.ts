import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SingleCardComponent } from 'src/app/components/elements/single-card/single-card.component';
import { CarouselComponent } from 'src/app/components/elements/carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SingleCardComponent,
    CarouselComponent,
  ],
})
export class HomeModule {}
