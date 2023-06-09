import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAccessData } from '../Models/iaccess-data';
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IRegisterData } from '../Models/iregister-data';
import { ILoginData } from '../Models/ilogin-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    //get user
  }

  jwt: JwtHelperService = new JwtHelperService();
  autoLogTimer: any;
  apiUrl: string = 'http://localhost:3000';
  loginUrl: string = this.apiUrl + '/login';
  registerUrl: string = this.apiUrl + '/register';

  private subj = new BehaviorSubject<null | IAccessData>(null);
  user$ = this.subj.asObservable();
  isLogged$ = this.user$.pipe(map((v) => !!v)); // si, il doppio esclamativo fa più figo :)

  isTokenExpired(tok: string) {
    return this.jwt.isTokenExpired(tok);
  }

  getUserData() {
    let chk: string | null = localStorage.getItem('user');
    let user: IAccessData | null;

    chk ? (user = JSON.parse(localStorage.getItem('user')!)) : null;

    return user!
      ? this.isTokenExpired(user.accessToken)
        ? null
        : this.subj.next(user)
      : null;
  }

  register(data: IRegisterData) {
    return this.http.post<IAccessData>(this.registerUrl, data);
  }

  login(data: ILoginData) {
    return this.http.post<IAccessData>(this.loginUrl, data).pipe(
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
