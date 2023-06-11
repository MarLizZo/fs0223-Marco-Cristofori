import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserslistRoutingModule } from './userslist-routing.module';
import { UserslistComponent } from './userslist.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@NgModule({
  declarations: [UserslistComponent],
  imports: [
    CommonModule,
    UserslistRoutingModule,
    LoadingComponent,
    AlertComponent,
  ],
})
export class UserslistModule {}
