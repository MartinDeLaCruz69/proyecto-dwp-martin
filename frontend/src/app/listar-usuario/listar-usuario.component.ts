import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService,
    ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarUsuario(id: any) {
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      alert('El usuario fue eliminado con exito');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })
  }

}