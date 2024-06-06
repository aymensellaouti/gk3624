import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log({ request });

    if(this.authService.isAuthenticated()) {
      const headers = new HttpHeaders().set(
        'Authorization',
        localStorage.getItem('token') ?? ''
      );
      const cloneReq = request.clone({headers});
      return next.handle(cloneReq).pipe(
        tap( (response) => {console.log({response});})
      );
    }

    return next.handle(request);
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
