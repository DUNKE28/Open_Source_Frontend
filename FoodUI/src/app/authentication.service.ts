import { Injectable, OnInit } from '@angular/core';
import { Cliente } from './model/cliente';
import { ClienteService } from './cliente.service';
import * as deepEqual from "deep-equal";
import { Router } from '@angular/router';
import { Administrador } from './model/administrador';
import { AdministradorService } from './administrador.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private clienteService:ClienteService, private administradorService:AdministradorService, private router: Router) { 
    this.loadData();
    this.rpt=false;
  }
  
  clientes:Cliente[];
  rpt: boolean;
  administradores: Administrador[];
  admin:Number;


  loadData(){
    this.clienteService.getClientesList()
    .subscribe(clientes=>this.clientes=clientes);

    this.administradorService.getAdministradoresList()
    .subscribe(administradores=>this.administradores=administradores);
  }

  authenticate(username, password) {
    this.rpt=false;
    for (var i = 0; i <= this.clientes.length; i++) {
          if( deepEqual(this.clientes[i].dni,username) && deepEqual(this.clientes[i].contraseña,password)){
            sessionStorage.setItem('username',username)
            this.router.navigate(["listaSede"]);
            this.rpt=true;
            this.admin=0;
          }
         }
     return this.rpt;    
  }

  authenticateAdmin(username, password){
    for(var j=0;j<=this.administradores.length;j++){
      if( deepEqual(this.administradores[j].dni,username) && deepEqual(this.administradores[j].contraseña,password)){
        sessionStorage.setItem('username',username)
        //sessionStorage.setItem('id_sede',(this.administradores[j].sede_id).toString())
        this.router.navigate(["nuevo"]);
        this.rpt=true;
        this.admin=1;
      }
    }
    
    return this.rpt;    
  }

  isUserLoggedIn() {
    //let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    //return !(user === null) //true
    let res: boolean;
    if(this.admin==0){
      res=true;
    }else{
      res=false;
    }
    return res;

  }

  isAdminLoggedIn(){
    //return false; //false
    let adm: boolean;
    if(this.admin==1){
      adm=true;
    }else{
      adm=false;
    }
    return adm;
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
