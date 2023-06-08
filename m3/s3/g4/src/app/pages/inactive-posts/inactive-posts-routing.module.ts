import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InactivePostsComponent } from './inactive-posts.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InactivePostsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class InactiveRoutingModule {}
