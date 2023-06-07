import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRoutingModule } from './single-routing.module';
import { SinglePostComponent } from './single-post.component';

@NgModule({
  declarations: [SinglePostComponent],
  imports: [CommonModule, SingleRoutingModule],
})
export class SingleModule {}
