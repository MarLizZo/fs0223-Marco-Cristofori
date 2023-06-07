import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveRoutingModule } from './inactive-posts-routing.module';
import { InactivePostsComponent } from './inactive-posts.component';
import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [InactivePostsComponent, TemplateComponent],
  imports: [CommonModule, InactiveRoutingModule],
})
export class InactiveModule {}
