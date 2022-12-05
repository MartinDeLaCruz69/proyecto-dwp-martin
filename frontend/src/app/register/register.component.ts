import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: '',
    username: '',
    userlastname: '',
    rol: 'empleado',
    direccion: '',
    nombreactividad: '',
    descripcionactividad: '',
    fecha: ''
  }

  passwordStrong = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  register(){
    if (this.passwordStrong.test(this.user.password)) {
      console.log('Se validó la contraseña');
    } else {
      alert('Favor de seguir las especificaciones de contraseña en "Instrucciones"');
      return;
    }

    this.authService.register(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
        alert('El usuario fue registrado exitosamente');
      },
      err => {
        console.log(err)
        alert("Falló el registro de usuario") }
    )
  }
}

