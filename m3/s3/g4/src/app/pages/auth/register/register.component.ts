import { Component } from '@angular/core';
import { IRegisterData } from 'src/app/Models/IRegisterData';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private userSvc: UsersService) {}

  data: IRegisterData = {
    email: '',
    password: '',
    username: '',
  };

  register() {
    this.userSvc.register(this.data).subscribe((res) => console.log(res));
  }
}
