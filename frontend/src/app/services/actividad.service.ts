import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url = 'http://localhost:3000/api/actividades/';

  constructor(private http: HttpClient) { }

  getActividades(): Observable<any> {
    return this.http.get(this.url + 'getuser');
  }

  eliminarActividad(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarActividad(actividad: Actividad): Observable<any> {
    return this.http.post(this.url + 'newuser', actividad);
  }

  obtenerActividad(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarActividad(id: string, actividad: Actividad): Observable<any> {
    return this.http.put(this.url + id, actividad);
  }
}
