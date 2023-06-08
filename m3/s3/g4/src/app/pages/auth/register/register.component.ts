import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private userSvc: UsersService) {}

  data: User = {
    email: '',
    password: '',
    username: '',
  };

  register() {
    //
  }
}
