import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenService {

  private baseURL = 'http://localhost:8080/api/detalleorden';

  constructor(private http:HttpClient) { }

  createDetalleOrden(detalleOrden:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,detalleOrden);
  }
}
