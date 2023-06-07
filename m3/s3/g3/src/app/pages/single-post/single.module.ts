import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRoutingModule } from './single-routing.module';
import { SinglePostComponent } from './single-post.component';
import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [SinglePostComponent, TemplateComponent],
  imports: [CommonModule, SingleRoutingModule],
  exports: [SingleRoutingModule],
})
export class SingleModule {}
