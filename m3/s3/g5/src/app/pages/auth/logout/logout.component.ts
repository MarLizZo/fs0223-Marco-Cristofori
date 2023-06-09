import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router, private svc: AuthService) {
    this.redirect();
  }

  userName: string | undefined;

  redirect() {
    this.svc.user$
      .subscribe((res) => {
        this.userName = res?.user.username;
      })
      .unsubscribe();
    this.svc.logout();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }
}
