import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ModalComponent,
    AlertComponent,
  ],
})
export class LoginModule {}
