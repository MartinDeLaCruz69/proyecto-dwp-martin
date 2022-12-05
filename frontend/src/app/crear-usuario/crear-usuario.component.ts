import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  titulo = 'Crear usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _usuarioService: UsuarioService,
              private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        username: ['', Validators.required],
        userlastname: ['', Validators.required],
        rol: ['', Validators.required],
        direccion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
}


  ngOnInit(): void {
    this.esEditar();
}

  agregarUsuario() {

    const USUARIO: Usuario = {
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
      username: this.usuarioForm.get('username')?.value,
      userlastname: this.usuarioForm.get('userlastname')?.value,
      rol: this.usuarioForm.get('rol')?.value,
      direccion: this.usuarioForm.get('direccion')?.value

    }

  if(this.id !== null) {

    this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
      alert('El usuario fue actualizado con exito.');
      this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })

    } else {

      console.log(USUARIO);
    this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
      alert('El usuario fue registrado con exito.');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })
  }

  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          email: data.email,
          password: data.password,
          username: data.username,
          userlastname: data.userlastname,
          rol: data.rol,
          direccion: data.direccion
        })
      })
    }
  }
}
