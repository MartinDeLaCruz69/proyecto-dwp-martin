import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: '',
    username: '',
    userlastname: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  register(){
    this.authService.register(this.user)
    .subscribe(
      res =>{
      console.log(res)
    },
    err => console.log(err)
    )
  }
}

