export class User {
  id?: number;
  email: string;
  password: string;
  username: string;

  constructor(
    _email: string,
    _password: string,
    _username: string,
    _id?: number
  ) {
    this.email = _email;
    this.password = _password;
    this.username = _username;
    this.id = _id;
  }
}
