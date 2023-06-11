import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, catchError, tap } from 'rxjs';
import { IRegisterData } from 'src/app/Models/iregister-data';
import { IUser } from 'src/app/Models/iuser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isUsersCollapsed: boolean = true;
  isFormCollapsed: boolean = true;
  isPageLoading: boolean = true;
  isArrLoading: boolean = true;
  usersArr: IUser[] = [];
  arrSub!: Subscription;
  delSub!: Subscription;
  regSub!: Subscription;
  data: IRegisterData = {
    realname: '',
    username: '',
    email: '',
    password: '',
    isadmin: false,
  };
  modalTitle: string = '';
  modalTitleUser: string = '';
  modalContent: string = '';
  @ViewChild('content')
  mymodal!: ElementRef;
  isError: boolean = false;
  alertTitle: string = '';
  alertBody: string = '';
  isErrorList: boolean = false;
  alertTitleList: string = '';
  alertBodyList: string = '';

  constructor(private authsvc: AuthService, private modalService: NgbModal) {}

  ngOnInit() {
    setTimeout(() => (this.isPageLoading = false), 2000);
    this.arrSub = this.authsvc
      .getUsers()
      .pipe(
        tap((res) => {
          this.usersArr = res;
          this.isArrLoading = false;
        }),
        catchError((error) => {
          this.alertTitleList = 'Error loading Posts';
          this.alertBodyList = 'Server is probably not responding correctly.';
          this.isArrLoading = false;
          this.isErrorList = true;
          throw error;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.arrSub) this.arrSub.unsubscribe();
    if (this.delSub) this.delSub.unsubscribe();
    if (this.regSub) this.regSub.unsubscribe();
  }

  deleteUser(user: IUser): void {
    this.authsvc.delete(user).subscribe();
    this.usersArr.splice(this.usersArr.findIndex((v) => v.id == user.id));
  }

  open(): void {
    this.modalService.open(this.mymodal);
  }

  createUser(): void {
    this.regSub = this.authsvc
      .register(this.data)
      .pipe(
        tap((res) => {
          let customStr = res.user.isadmin
            ? `Utente ${res.user.username} creato con successo. Privilegi di Admin concessi!`
            : `Utente ${res.user.username} creato con successo. L'utente NON ha privilegi di Admin.`;

          let newUser: IUser = {
            id: res.user.id,
            realname: res.user.realname,
            username: res.user.username,
            email: res.user.email,
          };
          this.modalTitle = 'Info Creazione User';
          this.modalContent = customStr;
          this.usersArr.push(newUser);
          this.open();
        }),
        catchError((error) => {
          this.alertTitle = 'Registration Error';
          this.alertBody = error.error;
          this.isError = true;
          throw error;
        })
      )
      .subscribe();
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
