import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private loginService:LoginService){
    
  }
  ngOnInit(): void {
    firebase.initializeApp({

      apiKey: "AIzaSyAbSt3BL38zjLMMYQZB6mJ4v-rvm7k3mBA",

  authDomain: "mis-clientes-a4f87.firebaseapp.com",


    });
   
  }
  estaLogueado(){
  return this.loginService.estaLogueado();
  }
  lagout(){
    this.loginService.lagout();
  }
}
