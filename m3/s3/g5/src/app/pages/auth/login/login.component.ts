import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map, take } from 'rxjs';
import { IAccessData } from 'src/app/Models/iaccess-data';
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
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  @ViewChild('content')
  mymodal!: ElementRef;

  data: ILoginData = {
    email: '',
    password: '',
  };

  responseUsername!: string;

  login() {
    this.svc.login(this.data).subscribe((res) => {
      this.responseUsername = res.user.username;
      this.open(this.mymodal);
      setTimeout(() => this.redirectNow(), 3000);
    });
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
