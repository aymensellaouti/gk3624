import { Component, inject } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../auth.service';
import { LoginResponseDto } from '../dto/login-response.dto';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastrService);
  login(credentials: Credentials) {
  //   this.authService.login(credentials).subscribe({
  //     next: (response: LoginResponseDto) => {
  //       localStorage.setItem('token', response.id);
  //       this.router.navigate([APP_ROUTES.cv]);
  //     },
  //     error: (e) => {
  //       this.toast.error('Veuillez vérifier vos credentials')
  //     }
  //   });
    this.authService.login(credentials)
    .pipe(
      tap(() => {this.router.navigate([APP_ROUTES.cv]);}),
      catchError(() => {
        this.toast.error('Veuillez vérifier vos credentials');
        return EMPTY
      })
    )
    .subscribe();
  }

}
