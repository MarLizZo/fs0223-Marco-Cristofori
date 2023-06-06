import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenComponent } from './components/driven/driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';

const routes: Routes = [
  {
    path: '',
    component: DrivenComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
