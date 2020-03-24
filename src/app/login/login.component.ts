import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  apiToken: string; 
  forma: FormGroup;

  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

  constructor(private fb: FormBuilder, private auth : LoginService, private toastr: ToastrService, private router : Router) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    this.forma = this.fb.group({
      correo:   [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get passwordNoValida() {
    return this.forma.get('password').invalid && this.forma.get('password').touched;
  }

  login() {
    console.log(this.forma.value);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
    this.validarLogin();
  }

  validarLogin() {
    const formData = new FormData();
    formData.append('email', this.forma.get('correo').value);
    formData.append('password', this.forma.get('password').value);
    this.auth.usuarioLogin(formData).subscribe(
      (resp: any) => {
        this.toastr.success("Login Exitoso", "Hello");
        //console.log("Login exitoso");
        localStorage.setItem('token', resp.data.api_token);
        this.router.navigateByUrl('admin');
      },
      (err: HttpErrorResponse) => {
        this.toastr.error("El usuario no se encuentra en el sistema", "Hello");
        //console.log("El usuario no se encuentra en el sistema ", err)
      }
    )
  }

}
