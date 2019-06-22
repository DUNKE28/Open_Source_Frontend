import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private baseURL = 'http://localhost:8080/api/orden';

  constructor(private http:HttpClient) { }

  createOrden(orden:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,orden);
  }

  updateOrden(orden:Object):Observable<Object>{
    return this.http.put(`${this.baseURL}`,orden);
  }

  deleteOrden(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }

  getOrdenesList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getOrdenById(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

}
