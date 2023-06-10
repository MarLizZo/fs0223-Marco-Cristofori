import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    this.svc.login(this.data).subscribe((res) => {
      this.modalTitle = `Grazie per esserti collegato, `;
      this.modalTitleUser = res.user.username;
      this.modalContent = 'Sarai reindirizzato alla home in 3 secondi..';
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
