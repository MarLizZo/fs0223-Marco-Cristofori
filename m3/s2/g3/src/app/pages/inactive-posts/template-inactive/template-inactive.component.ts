import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-template-inactive',
  templateUrl: './template-inactive.component.html',
  styleUrls: ['./template-inactive.component.scss'],
})
export class TemplateInactiveComponent {
  @Input() posts!: Post[];

  @Output() onSwitch = new EventEmitter();

  switchPost(post: Post): void {
    this.onSwitch.emit(post);
  }
}
