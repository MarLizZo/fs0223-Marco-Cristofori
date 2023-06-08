import { Component } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { IAccessData } from '../Models/iaccess-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private userSvc: UsersService) {}

  isUserLogged() {
    return this.userSvc.isLogged$;
  }

  getUsername(): string {
    let data: IAccessData = JSON.parse(localStorage.getItem('user')!);
    return data.user.username;
  }

  isHomePage(): boolean {
    return location.pathname == '/';
  }
  isActivePage(): boolean {
    return location.pathname == '/active';
  }
  isInactivePage(): boolean {
    return location.pathname == '/inactive';
  }
  isLoginPage(): boolean {
    return location.pathname == '/auth/login';
  }
  isRegisterPage(): boolean {
    return location.pathname == '/auth/register';
  }
}
