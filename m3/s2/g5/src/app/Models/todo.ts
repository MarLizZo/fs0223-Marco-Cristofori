import { IToDo } from './ito-do';

export class ToDo implements IToDo {
  id?: number;
  title: string;
  completed: boolean;

  constructor(_title: string, _completed: boolean, _id?: number) {
    this.title = _title;
    this.completed = _completed;
    this.id = _id;
  }
}
