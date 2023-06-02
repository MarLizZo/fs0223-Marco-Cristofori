import { Component } from '@angular/core';
import { ToDo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  task: ToDo = { title: '', completed: false };
  todoArr: ToDo[] = [];
  isLoading = true;

  constructor(private todo: TodosService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.todo.getBoolTasks(false).then((res) => {
      setTimeout(() => {
        this.todoArr = res;
        this.isLoading = false;
        this.isLoading = false;
      }, 3000);
    });
  }

  markCompleted(obj: ToDo) {
    obj.completed = true;
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

  createTask(t: ToDo) {
    this.isLoading = true;
    this.todo.createNewTask(t).then((res) => {
      this.task.title = '';
      this.getTasks();
    });
  }
}
