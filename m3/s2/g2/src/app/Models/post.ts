export class Post {
  id: number;
  body: string;
  title: string;
  active: boolean;

  constructor(_id: number, _body: string, _title: string, _active: boolean) {
    this.id = _id;
    this.body = _body;
    this.title = _title;
    this.active = _active;
  }
}
