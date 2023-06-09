import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthErrorComponent } from './auth-error.component';

const routes: Routes = [{ path: '', component: AuthErrorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthErrorRoutingModule { }
