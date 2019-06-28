import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {


  private baseURL = 'http://localhost:8080/api/sede';

  constructor(private http:HttpClient) { }

  createSede(sede:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,sede);
  }

  getSedeById(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getSedeList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
}
