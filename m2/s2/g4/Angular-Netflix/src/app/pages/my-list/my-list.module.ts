import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyListRoutingModule } from './my-list-routing.module';
import { MyListComponent } from './my-list.component';
import { SingleCardComponent } from 'src/app/components/elements/single-card/single-card.component';

@NgModule({
  declarations: [MyListComponent],
  imports: [CommonModule, MyListRoutingModule, SingleCardComponent],
})
export class MyListModule {}
