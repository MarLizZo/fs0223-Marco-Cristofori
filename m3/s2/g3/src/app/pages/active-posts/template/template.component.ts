import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  @Input() posts!: Post[];

  @Output() onSwitch = new EventEmitter();

  switchPost(id: number) {
    console.log(id);
    this.onSwitch.emit(id);
  }
}
