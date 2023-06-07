import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { ColorUserDirective } from 'src/app/color-user.directive';
import { PipeUpperPipe } from 'src/app/pipe-upper.pipe';

@NgModule({
  declarations: [TemplateComponent, ColorUserDirective, PipeUpperPipe],
  imports: [CommonModule],
  exports: [TemplateComponent],
})
export class TemplateModule {}
