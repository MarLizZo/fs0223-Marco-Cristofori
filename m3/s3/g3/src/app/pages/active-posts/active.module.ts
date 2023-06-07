import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveRoutingModule } from './active-routing.module';
import { ActivePostsComponent } from './active-posts.component';
import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [ActivePostsComponent, TemplateComponent],
  imports: [CommonModule, ActiveRoutingModule],
})
export class ActiveModule {}
