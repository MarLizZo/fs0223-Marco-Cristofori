import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
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

  constructor(private authsvc: AuthService, private modalService: NgbModal) {}

  ngOnInit() {
    this.arrSub = this.authsvc.getUsers().subscribe((res) => {
      this.usersArr = res;
    });
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
    this.regSub = this.authsvc.register(this.data).subscribe((res) => {
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
    });
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
