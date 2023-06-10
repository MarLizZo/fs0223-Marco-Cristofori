import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, map, switchMap, take } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authsvc: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authsvc.user$.pipe(
      take(1),
      switchMap((val) => {
        return val
          ? next.handle(
              request.clone({
                headers: request.headers.append(
                  'Authorization',
                  `Bearer ${val.accessToken}`
                ),
              })
            )
          : next.handle(request);
      })
    );
  }
}
