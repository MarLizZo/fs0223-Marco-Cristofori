import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'my-list',
    loadChildren: () =>
      import('./pages/my-list/my-list.module').then((m) => m.MyListModule),
  },
  {
    path: 'latest',
    loadChildren: () =>
      import('./pages/latest/latest.module').then((m) => m.LatestModule),
  },
  {
    path: 'browse',
    loadChildren: () =>
      import('./pages/browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
