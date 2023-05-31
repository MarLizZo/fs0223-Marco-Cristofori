import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsServiceService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  @Input() posts!: Post[];

  @Output() onSwitch = new EventEmitter();

  switchPost(id: number): void {
    this.onSwitch.emit(id);
  }
}
