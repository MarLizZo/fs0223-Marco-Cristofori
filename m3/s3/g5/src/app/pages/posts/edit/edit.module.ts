import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, EditRoutingModule, FormsModule, LoadingComponent],
})
export class EditModule {}
