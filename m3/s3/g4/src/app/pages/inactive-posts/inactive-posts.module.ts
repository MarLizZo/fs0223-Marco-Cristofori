import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveRoutingModule } from './inactive-posts-routing.module';
import { InactivePostsComponent } from './inactive-posts.component';
import { TemplateModule } from '../template/template.module';
// import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [InactivePostsComponent],
  imports: [CommonModule, InactiveRoutingModule, TemplateModule],
  exports: [InactiveRoutingModule],
})
export class InactiveModule {}
