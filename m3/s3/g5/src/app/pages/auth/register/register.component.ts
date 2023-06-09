import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterData } from 'src/app/Models/iregister-data';
import { AuthService } from 'src/app/Services/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  data: IRegisterData = {
    realname: '',
    username: '',
    email: '',
    password: '',
  };

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

  regSub!: Subscription;
  logSub!: Subscription;

  ngOnDestroy() {
    this.logSub.unsubscribe();
    this.regSub.unsubscribe();
  }

  register() {
    this.regSub = this.svc.register(this.data).subscribe((res) => {
      this.logSub = this.svc
        .login({ email: this.data.email, password: this.data.password })
        .subscribe((v) => {
          this.open(this.mymodal);
          setTimeout(() => {
            this.redirectNow();
          }, 3000);
        });
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
