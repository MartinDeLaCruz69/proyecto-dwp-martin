import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'
  public user;

  constructor(private http: HttpClient, private router: Router) {this.user=(localStorage.getItem('rol')) }

  register(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  login(user: any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('correo');
    localStorage.removeItem('rol');
    this.router.navigate(['/login'])
  }

}
