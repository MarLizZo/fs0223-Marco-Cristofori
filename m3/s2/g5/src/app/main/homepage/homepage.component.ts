import { Component } from '@angular/core';
import { ToDo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  task: ToDo = { title: 'A', completed: false };
  todoArr: ToDo[] = [];
  protected isLoading = true;

  constructor(private todo: TodosService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.todo.getBoolTasks(false).then((res) => {
      setTimeout(() => {
        this.todoArr = res;
        this.isLoading = false;
      }, 3000);
    });
  }

  markCompleted(obj: ToDo) {
    //
  }

  delete(obj: ToDo) {
    //
  }

  createTask() {
    //
  }
}
