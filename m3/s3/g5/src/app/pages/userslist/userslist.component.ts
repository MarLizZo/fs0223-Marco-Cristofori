import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRegisterData } from 'src/app/Models/iregister-data';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss'],
})
export class UserslistComponent {
  usersArr: IRegisterData[] = [];
  arrSub!: Subscription;

  constructor(private svc: AuthService) {}

  ngOnInit() {
    this.arrSub = this.svc.getUsers().subscribe((res) => (this.usersArr = res));
  }

  ngOnDestroy() {
    this.arrSub.unsubscribe();
  }
}
