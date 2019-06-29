import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  
  private baseURL = 'http://localhost:8080/api/insumo';

  constructor(private http:HttpClient) { }

  createInsumo(insumo:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,insumo);
  }

  updateInsumo(insumo:Object):Observable<Object>{
    return this.http.put(`${this.baseURL}`,insumo);
  }

  deleteInsumo(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }

  getInsumosList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getInsumoById(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
