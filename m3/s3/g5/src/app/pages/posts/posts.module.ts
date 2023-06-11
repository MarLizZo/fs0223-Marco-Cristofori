import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostsRoutingModule, LoadingComponent, AlertComponent],
})
export class PostsModule {}
