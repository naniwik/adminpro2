import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  public registerForm: FormGroup;

  private createForm() {
    this.registerForm = this.formBuilder.group({
      nombre: ['Salchi', Validators.required, Validators.minLength(5)],
      email: ['salchi@gmail.com', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password: ['salchi', Validators.required],
      password2: ['salchi', Validators.required],
      terminos: [false, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public crearUsuario() {
   // console.log(this.registerForm.value);
  }
}
