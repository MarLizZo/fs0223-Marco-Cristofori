import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active',
    loadChildren: () =>
      import('./pages/active-posts/active.module').then((m) => m.ActiveModule),
  },
  {
    path: 'inactive',
    loadChildren: () =>
      import('./pages/inactive-posts/inactive-posts.module').then(
        (m) => m.InactiveModule
      ),
  },
  {
    path: 'post/:id',
    loadChildren: () =>
      import('./pages/single-post/single.module').then((m) => m.SingleModule),
  },
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'auth/register',
    loadChildren: () =>
      import('./pages/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
