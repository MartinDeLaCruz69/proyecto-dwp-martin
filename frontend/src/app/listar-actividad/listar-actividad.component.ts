import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-listar-actividad',
  templateUrl: './listar-actividad.component.html',
  styleUrls: ['./listar-actividad.component.css']
})
export class ListarActividadComponent implements OnInit {
  listActividades: Actividad[] = [];

  constructor(private _actividadService: ActividadService,
    ) { }

  ngOnInit(): void {
    this.obtenerActividades();
  }


  obtenerActividades() {
    this._actividadService.getActividades().subscribe(data => {
      console.log(data);
      this.listActividades = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarActividad(id: any) {
    this._actividadService.eliminarActividad(id).subscribe(data => {
      alert('La Actividad fue eliminada con exito');
      this.obtenerActividades();
    }, error => {
      console.log(error);
    })
  }

}