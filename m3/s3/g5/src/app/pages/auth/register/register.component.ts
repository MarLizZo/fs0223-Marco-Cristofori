import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterData } from 'src/app/Models/iregister-data';
import { AuthService } from 'src/app/Services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private modalService: NgbModal
  ) {}

  @ViewChild('content')
  mymodal!: ElementRef;

  modalTitle: string = '';
  modalTitleUser: string = '';
  modalContent: string = '';

  regSub!: Subscription;
  logSub!: Subscription;
  timer: any;

  ngOnDestroy() {
    if (this.logSub) this.logSub.unsubscribe();
    if (this.regSub) this.regSub.unsubscribe();
    clearTimeout(this.timer);
  }

  register() {
    this.regSub = this.svc.register(this.data).subscribe((res) => {
      this.logSub = this.svc
        .login({ email: this.data.email, password: this.data.password })
        .subscribe((v) => {
          this.modalTitle = 'Benvenuto, ';
          this.modalTitleUser = v.user.username;
          this.modalContent = 'Sarai reindirizzato alla home in 3 secondi..';
          this.open(this.mymodal);
          this.timer = setTimeout(() => {
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
