import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


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
    userlastname: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
