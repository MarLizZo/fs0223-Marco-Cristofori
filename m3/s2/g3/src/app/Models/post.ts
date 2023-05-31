export class Post {
  id: number;
  body: string;
  title: string;
  active: boolean;
  type: string;

  constructor(
    _id: number,
    _body: string,
    _title: string,
    _active: boolean,
    _type: string
  ) {
    this.id = _id;
    this.body = _body;
    this.title = _title;
    this.active = _active;
    this.type = _type;
  }
}
