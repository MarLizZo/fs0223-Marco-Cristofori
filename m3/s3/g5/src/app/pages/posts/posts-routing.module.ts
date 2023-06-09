import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  { path: '', component: PostsComponent },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create/create.module').then((m) => m.CreateModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
