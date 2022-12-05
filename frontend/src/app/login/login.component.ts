import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
    username: '',
    userlastname: '',
    rol: '',
    direccion: '',
    nombreactividad: '',
    descripcionactividad: '',
    fecha: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user)
    .subscribe(
      res => {
        console.log("Resultado",res);
        if(res.user.rol == 'Admin'){
          console.log("Tienes permiso de: ", res.user.rol)
        }
        localStorage.setItem('token', res.token);
        localStorage.setItem('correo', res.user.email);
        localStorage.setItem('rol', res.user.rol);
        this.router.navigate(['/listar-usuarios']);
        alert("Se ha iniciado sesion exitosamente");
      },
      err => {
        console.log(err)
        alert("Falló el inicio de sesión") }
    )
  }
}
