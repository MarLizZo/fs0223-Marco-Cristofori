import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuCollapsed = true;

  isHomePage(): boolean {
    return location.pathname == '/';
  }
  isAdminPage(): boolean {
    return location.pathname == '/admin';
  }
  isUsersListPage(): boolean {
    return location.pathname == '/userslist';
  }
  isLoginPage(): boolean {
    return location.pathname == '/auth/login';
  }
  isRegisterPage(): boolean {
    return location.pathname == '/auth/register';
  }
}
