import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRoutingModule } from './single-routing.module';
import { SinglePostComponent } from './single-post.component';
import { TemplateModule } from '../template/template.module';
// import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [SinglePostComponent],
  imports: [CommonModule, SingleRoutingModule, TemplateModule],
  exports: [SingleRoutingModule],
})
export class SingleModule {}
