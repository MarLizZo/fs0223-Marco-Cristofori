import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  {
    path: 'transfer',
    loadChildren: () =>
      import('./transfer/transfer.module').then((m) => m.TransferModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
