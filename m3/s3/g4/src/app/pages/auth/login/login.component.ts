import { Component } from '@angular/core';
import { ILoginData } from 'src/app/Models/ilogin-data';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userSvc: UsersService) {}

  data: ILoginData = {
    email: '',
    password: '',
  };

  login() {
    this.userSvc.login(this.data).subscribe((res) => console.log(res));
  }
}
