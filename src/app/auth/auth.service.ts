import { Injectable, inject } from '@angular/core';
import { Credentials } from './dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from './dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  constructor() { }

  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap((response) => {
        localStorage.setItem('token', response.id);
      })
    );
  }
}
