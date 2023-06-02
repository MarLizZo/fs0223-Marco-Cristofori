import { Component } from '@angular/core';
import { ToDo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent {
  todoArr: ToDo[] = [];
  isLoading = true;

  constructor(private todo: TodosService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.todo.getBoolTasks(true).then((res) => {
      setTimeout(() => {
        this.todoArr = res;
        this.isLoading = false;
      }, 3000);
    });
  }

  markNotCompleted(obj: ToDo) {
    obj.completed = false;
    this.isLoading = true;
    this.todo.updateTask(obj).then((res) => {
      this.getTasks();
    });
  }

  delete(obj: ToDo) {
    this.isLoading = true;
    this.todo.deleteTask(obj).then((res) => {
      this.getTasks();
    });
  }
}
