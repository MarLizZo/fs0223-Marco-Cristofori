import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { IsAdminGuard } from './is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
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
    path: 'auth/logout',
    loadChildren: () =>
      import('./pages/auth/logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard, IsAdminGuard],
  },
  {
    path: 'userslist',
    loadChildren: () =>
      import('./pages/userslist/userslist.module').then(
        (m) => m.UserslistModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '401',
    loadChildren: () =>
      import('./pages/auth-error/auth-error.module').then(
        (m) => m.AuthErrorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
