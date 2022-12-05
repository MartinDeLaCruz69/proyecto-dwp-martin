export class Usuario {
    _id?: number;
    email: string;
    password: string;
    username: string;
    userlastname: string;
    rol: string;
    direccion: string;

    constructor(email: string, password: string, username: string, userlastname: string, rol: string, direccion: string ){
        this.email = email;
        this.password = password;
        this.username = username;
        this.userlastname = userlastname;
        this.rol = rol;
        this.direccion = direccion;

    }
}