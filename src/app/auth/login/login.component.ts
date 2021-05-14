import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UsuarioService) {
    let mail = localStorage.getItem('mail') || '';
    this.registerForm = this.formBuilder.group({
      email: [mail, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
      remember: [true, Validators.required]
    });
  }

  ngOnInit(): void {
    this.renderButton();
  }

  login(): void {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value, 'is valid');
      this.userService.loginUser(this.registerForm.value).subscribe(resp => {
        console.log("usuario logueado", resp);
        let user: Usuario = resp.user;
        this.router.navigate(['/dashboard']);
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

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();
  }

  attachSignin(element) {
    this.userService.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        console.log(id_token);
        this.userService.loginGoogle(id_token);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  async startApp () {
    await this.userService.googleInit();
    this.attachSignin(document.getElementById('my-signin2'));
  }
}
