import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  test (){
    let inputPassword = document.getElementById("password") as HTMLInputElement;
    let valuesPassword = inputPassword.value;
    if (valuesPassword.length >= 8) {
      console.log("Ingreso correctamente");
    }else{
      alert("El Minimo de Caracteres es de 8");
    }
  }
}

