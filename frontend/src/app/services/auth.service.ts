import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  login(user: any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }
}
