import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveRoutingModule } from './active-routing.module';
import { ActivePostsComponent } from './active-posts.component';
import { TemplateModule } from '../template/template.module';
// import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [ActivePostsComponent],
  imports: [CommonModule, ActiveRoutingModule, TemplateModule],
  exports: [ActiveRoutingModule],
})
export class ActiveModule {}
