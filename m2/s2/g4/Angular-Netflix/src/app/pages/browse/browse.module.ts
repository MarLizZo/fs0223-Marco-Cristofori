import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { CarouselComponent } from 'src/app/components/elements/carousel/carousel.component';

@NgModule({
  declarations: [BrowseComponent],
  imports: [CommonModule, BrowseRoutingModule, CarouselComponent],
})
export class BrowseModule {}
