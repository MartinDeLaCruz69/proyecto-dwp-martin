import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {
  actividadForm: FormGroup;
  titulo = 'Crear actividad';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _actividadService: ActividadService,
              private aRouter: ActivatedRoute) {
    this.actividadForm = this.fb.group({
        nombreactividad: ['', Validators.required],
        descripcionactividad: ['', Validators.required],
        username: ['', Validators.required],
        userlastname: ['', Validators.required],
        rol: ['', Validators.required],
        fecha: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
}


  ngOnInit(): void {
    this.esEditar();
}

  agregarActividad() {

    const ACTIVIDAD: Actividad = {
      nombreactividad: this.actividadForm.get('nombreactividad')?.value,
      descripcionactividad: this.actividadForm.get('descripcionactividad')?.value,
      username: this.actividadForm.get('username')?.value,
      userlastname: this.actividadForm.get('userlastname')?.value,
      rol: this.actividadForm.get('rol')?.value,
      fecha: this.actividadForm.get('fecha')?.value

    }

  if(this.id !== null) {

    this._actividadService.editarActividad(this.id, ACTIVIDAD).subscribe(data =>{
      alert('La actividad fue actualizada con exito.');
      this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.actividadForm.reset();
      })

    } else {

      console.log(ACTIVIDAD);
    this._actividadService.guardarActividad(ACTIVIDAD).subscribe(data => {
      alert('La actividad fue registrada con exito.');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.actividadForm.reset();
    })
  }

  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar actividad';
      this._actividadService.obtenerActividad(this.id).subscribe(data => {
        this.actividadForm.setValue({
          nombreactividad: data.nombreactividad,
          descripcionactividad: data.descripcionactividad,
          username: data.username,
          userlastname: data.userlastname,
          rol: data.rol,
          fecha: data.fecha
        })
      })
    }
  }
}
