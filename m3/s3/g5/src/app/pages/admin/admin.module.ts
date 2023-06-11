import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCollapseModule,
    FormsModule,
    ModalComponent,
    LoadingComponent,
    AlertComponent,
  ],
})
export class AdminModule {}
