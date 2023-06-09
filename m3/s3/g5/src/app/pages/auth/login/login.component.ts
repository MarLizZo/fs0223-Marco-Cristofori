import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, catchError, tap, throwError } from 'rxjs';
import { ILoginData } from 'src/app/Models/ilogin-data';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private svc: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  logSub!: Subscription;
  isError: boolean = false;
  alertTitle: string = 'Login error';
  alertBody: string = '';
  timer: any;

  ngOnDestroy() {
    if (this.logSub) this.logSub.unsubscribe();
    clearTimeout(this.timer);
  }

  @ViewChild('content')
  mymodal!: ElementRef;

  data: ILoginData = {
    email: '',
    password: '',
  };

  modalTitle: string = '';
  modalTitleUser: string = '';
  modalContent: string = '';

  login() {
    this.logSub = this.svc
      .login(this.data)
      .pipe(
        tap((res) => {
          this.modalTitle = `Grazie per esserti collegato, `;
          this.modalTitleUser = res.user.username;
          this.modalContent = 'Sarai reindirizzato alla home in 3 secondi..';
          this.open(this.mymodal);
          this.timer = setTimeout(() => this.redirectNow(), 3000);
        }),
        catchError((error) => {
          this.alertBody = error.error;
          this.isError = true;
          throw error;
        })
      )
      .subscribe();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  redirectNow() {
    this.dismiss();
    this.router.navigate(['']);
  }
}
