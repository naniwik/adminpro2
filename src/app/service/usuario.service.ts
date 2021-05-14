import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { RegisterForm, UserLoginForm } from '../Interfaces/register-form.interface';
import { Usuario } from '../models/usuario.model';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {
    this.googleInit();
  }

  validarToken() {
    const token = localStorage.getItem('token') || '';

    if (!token)
      return of(false);

    return this.http.get(`${environment.base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError(error => of(false))
    );

  }

  loginUserGoogle(token: string) {
    return this.http.post(`${environment.base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
      }
      )
    );
  }

  crearUsurio(form: RegisterForm) {
    return this.http.post(`${environment.base_url}/usuarios`, form).pipe(
      tap((resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
      }
      )

    );
  }

  loginUser(form: UserLoginForm) {
    return this.http.post(`${environment.base_url}/login`, form).pipe(
      tap((resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
        if (form.remember) {
          localStorage.setItem('mail', form.email);
        } else {
          localStorage.removeItem('mail');
        }
      }
      )

    );
  }

  googleInit = function () {
    return new Promise<void>(resolve => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '849600141354-ur66us0f999adk95q3gn6ub3lb6bnsd4.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    })
  };

  loginGoogle(token: string): void {
    if (token) {
      this.loginUserGoogle(token).subscribe(resp => {
        console.log("usuario logueado", resp);
        let user: Usuario = resp.user;
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      }, (err) => {
        console.warn(err.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.msg,
          //  footer: '<a href>Why do I have this issue?</a>'
        })
      }
      );
    } else {
      console.log('is not valid');
    }
  }

  logOut() {
    localStorage.removeItem('token');
    gapi.auth2.getAuthInstance();
    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        console.log('User signed out.');
        this.router.navigateByUrl('/login');
      })
    });
  }

}
