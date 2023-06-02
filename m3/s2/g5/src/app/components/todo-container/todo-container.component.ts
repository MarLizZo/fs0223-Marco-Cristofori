import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent {
  @Input() task!: ToDo;
  @Input() showMark!: boolean;

  @Output() onDelete = new EventEmitter();
  @Output() onMark = new EventEmitter();
  @Output() onUnMark = new EventEmitter();

  del(): void {
    this.onDelete.emit(this.task);
  }

  mark(): void {
    this.onMark.emit(this.task);
  }

  unMark(): void {
    this.onUnMark.emit(this.task);
  }
}
