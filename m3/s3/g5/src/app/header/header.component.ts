import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;
  isLogged: boolean = false;
  isAdmin: boolean | undefined = false;
  userName: string | undefined;
  loggedSub!: Subscription;
  adminSub!: Subscription;

  constructor(private svc: AuthService) {
    this.checkUserLogged();
    this.checkIfAdmin();
  }

  ngOnDestroy() {
    this.loggedSub.unsubscribe();
    this.adminSub.unsubscribe();
  }

  checkIfAdmin() {
    this.adminSub = this.svc.isAdmin$.subscribe((res) => (this.isAdmin = res));
  }

  checkUserLogged() {
    this.loggedSub = this.svc.isLogged$.subscribe((res) => {
      this.isLogged = res;
      res ? this.getUsername() : null;
    });
  }

  getUsername(): void {
    this.svc.user$
      .subscribe((res) => (this.userName = res?.user.username))
      .unsubscribe();
  }

  isHomePage(): boolean {
    return location.pathname == '/';
  }
  isAdminPage(): boolean {
    return location.pathname == '/admin';
  }
  isPostPage(): boolean {
    return location.pathname.includes('/posts');
  }
  isUsersListPage(): boolean {
    return location.pathname == '/userslist';
  }
  isLoginPage(): boolean {
    return location.pathname == '/auth/login';
  }
  isLogoutPage(): boolean {
    return location.pathname == '/auth/logout';
  }
  isRegisterPage(): boolean {
    return location.pathname == '/auth/register';
  }
}
