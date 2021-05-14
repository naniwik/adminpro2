import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent {

  public formSubmitted = false;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsuarioService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      nombre: ['salchi', [Validators.required, Validators.minLength(5)]],
      email: ['salchi@gmail.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['salchi', Validators.required],
      password2: ['salchi', Validators.required],
      terminos: [false, Validators.required]
    }
      , {
        validators: this.passwordvalidation()
      });
  }

  public crearUsuario() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      console.log('is valid');
      this.userService.crearUsurio(this.registerForm.value).subscribe(resp => {
        console.log("usuario creado", resp);
        localStorage.setItem('token', resp.token );
        this.router.navigateByUrl('/dashboard');
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

  public campoNoValido(campo: string): boolean {
    //   console.log(this.registerForm.get(campo).invalid);
    return (this.registerForm.get(campo).invalid && this.formSubmitted);
  }

  public passwordvalidation() {
    return (form: FormGroup) => {
      const passcontrol = form.get('password');
      const pass2control = form.get('password2');
      if (passcontrol.value === pass2control.value) {
        pass2control.setErrors(null);
      } else {
        pass2control.setErrors({ notEqual: true });
      }
    }
  }

  public passNovalid(): boolean {
    let isnotvalud = false;
    if (this.formSubmitted) {
      if (this.registerForm.get('password').invalid
        || this.registerForm.get('password2').invalid) {
        isnotvalud = true;
      }

      if (!isnotvalud) {
        let pass = this.registerForm.get('password').value;
        let pass2 = this.registerForm.get('password2').value;
        isnotvalud = (pass !== pass2);
      }
    }
    return isnotvalud;
  }
}
