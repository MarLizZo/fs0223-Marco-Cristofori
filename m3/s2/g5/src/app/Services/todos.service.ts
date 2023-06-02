import { Injectable } from '@angular/core';
import { ToDo } from '../Models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private apiUrl: string = 'http://localhost:3000/tasks';

  constructor() {}

  getAllTasks(): Promise<ToDo[]> {
    return fetch(this.apiUrl).then((res) => res.json());
  }

  getBoolTasks(flag: boolean): Promise<ToDo[]> {
    return this.getAllTasks().then((res) =>
      res.filter((t) => t.completed == flag)
    );
  }

  createNewTask(obj: ToDo): Promise<ToDo> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    }).then((res) => res.json());
  }

  deleteTask(obj: ToDo): Promise<ToDo> {
    return fetch(`${this.apiUrl}/${obj.id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  updateTask(obj: ToDo): Promise<ToDo> {
    return fetch(`${this.apiUrl}/${obj.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    }).then((res) => res.json());
  }
}
