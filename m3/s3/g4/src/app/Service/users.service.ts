import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAccessData } from '../Models/iaccess-data';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { IRegisterData } from '../Models/IRegisterData';
import { ILoginData } from '../Models/ilogin-data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private router: Router) {
    this.getUserData();
  }

  jwt: JwtHelperService = new JwtHelperService();
  autoLogTimer: any;
  apiUrl: string = 'http://localhost:3000';

  private subj = new BehaviorSubject<null | IAccessData>(null);
  user$ = this.subj.asObservable();
  isLogged$ = this.user$.pipe(map((v) => Boolean(v)));

  getUserData() {
    let chk = localStorage.getItem('user');
    let user: IAccessData | null;

    chk ? (user = JSON.parse(localStorage.getItem('user')!)) : null;

    return user!
      ? this.isTokenExpired(user.accessToken)
        ? null
        : this.subj.next(user)
      : null;
  }

  isTokenExpired(tok: string) {
    return this.jwt.isTokenExpired(tok);
  }

  register(data: IRegisterData) {
    return this.http.post<IAccessData>(this.apiUrl + '/register', data);
  }

  login(data: ILoginData) {
    return this.http.post<IAccessData>(this.apiUrl + '/login', data).pipe(
      tap((val) => {
        this.subj.next(val);
        localStorage.setItem('user', JSON.stringify(val));
        const expireDate = this.jwt.getTokenExpirationDate(
          val.accessToken
        ) as Date;
        this.logoutExp(expireDate);
        this.router.navigate(['']);
      })
    );
  }

  logout() {
    this.subj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  logoutExp(expire: Date) {
    const msToLogout = expire.getTime() - new Date().getTime();
    this.autoLogTimer = setTimeout(() => {
      this.logout();
    }, msToLogout);
  }
}
