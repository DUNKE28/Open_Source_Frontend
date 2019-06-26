import { Injectable, OnInit } from '@angular/core';
import { Administrador } from './model/administrador';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  //private isUserLoggedIn ;
  //public usserLogged:Administrador;

  private baseURL = 'http://localhost:8080/api/administrador';

  constructor(private http:HttpClient) { 
  }

  /*
  constructor(private http:HttpClient) { 
    this.isUserLoggedIn=false;
  }

  setUserLoggedIn(user: Administrador){
    this.isUserLoggedIn=true;
    this.usserLogged=user;
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  getUserLoggedIn(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }
*/
  getAdministradoresList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

}
