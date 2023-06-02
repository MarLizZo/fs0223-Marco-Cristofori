import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/Models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  task: ToDo = { title: '', completed: false };

  @Output() onCreate = new EventEmitter();

  create() {
    this.onCreate.emit(this.task);
  }
}
