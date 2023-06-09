import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  userName: string | undefined;
  timer: any;

  constructor(private router: Router, private svc: AuthService) {
    this.redirect();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  redirect() {
    this.svc.user$
      .subscribe((res) => {
        this.userName = res?.user.username;
      })
      .unsubscribe();
    this.svc.logout();
    this.timer = setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }
}
