export class Actividad {
    _id?: number;
    nombreactividad: string;
    descripcionactividad: string;
    username: string;
    userlastname: string;
    rol: string;
    fecha: string;

    constructor(nombreactividad: string, descripcionactividad: string, username: string, userlastname: string, rol: string, fecha: string ){
        this.nombreactividad = nombreactividad;
        this.descripcionactividad = descripcionactividad;
        this.username = username;
        this.userlastname = userlastname;
        this.rol = rol;
        this.fecha = fecha;

    }
}