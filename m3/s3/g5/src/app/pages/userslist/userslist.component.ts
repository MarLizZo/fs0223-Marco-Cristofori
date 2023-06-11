import { Component } from '@angular/core';
import { Subscription, catchError, tap } from 'rxjs';
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
  isError: boolean = false;
  alertTitle: string = '';
  alertBody: string = '';

  constructor(private svc: AuthService) {}

  ngOnInit() {
    setTimeout(() => (this.isPageLoading = false), 2000);
    this.arrSub = this.svc
      .getUsers()
      .pipe(
        tap((res) => {
          this.usersArr = res;
          this.isArrLoading = false;
        }),
        catchError((err) => {
          this.alertTitle = 'Error Loading content';
          this.alertBody = 'Server is probably not responding..';
          this.isError = true;
          this.isArrLoading = false;
          throw err;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.arrSub.unsubscribe();
  }
}
