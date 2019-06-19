import { Injectable, OnInit } from '@angular/core';
import { Cliente } from './model/cliente';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ClienteService   {

  private isUserLoggedIn ;
  public usserLogged:Cliente;

  private baseURL = 'http://localhost:8080/api/cliente';

  constructor(private http:HttpClient) { 
    this.isUserLoggedIn=false;
  }

  setUserLoggedIn(user: Cliente){
    this.isUserLoggedIn=true;
    this.usserLogged=user;
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  getUserLoggedIn(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getClientesList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

}
