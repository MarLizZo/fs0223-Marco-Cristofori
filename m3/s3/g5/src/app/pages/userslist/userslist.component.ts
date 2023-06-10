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
  isPageLoading: boolean = true;
  isArrLoading: boolean = true;

  constructor(private svc: AuthService) {}

  ngOnInit() {
    setTimeout(() => (this.isPageLoading = false), 2000);
    this.arrSub = this.svc.getUsers().subscribe((res) => {
      this.usersArr = res;
      this.isArrLoading = false;
    });
  }

  ngOnDestroy() {
    this.arrSub.unsubscribe();
  }
}
