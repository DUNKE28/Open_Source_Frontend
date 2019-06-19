import { Injectable, OnInit } from '@angular/core';
import { Cliente } from './model/cliente';
import { ClienteService } from './cliente.service';
import * as deepEqual from "deep-equal";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private clienteService:ClienteService, private router: Router) { 
    this.loadData();
    this.rpt=false;
  }
  
  clientes:Cliente[];
  rpt: boolean;


  loadData(){
    this.clienteService.getClientesList()
    .subscribe(clientes=>this.clientes=clientes);
  }

  authenticate(username, password) {
    for (var i = 0; i <= this.clientes.length; i++) {
      if( deepEqual(this.clientes[i].dni,username) && deepEqual(this.clientes[i].contraseña,password)){
        sessionStorage.setItem('username',username)
        this.router.navigate(["listar"]);
        this.rpt=true;
      }
     }
     
     return this.rpt;    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
