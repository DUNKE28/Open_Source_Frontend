import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseURL = 'http://localhost:8080/api/menu';

  constructor(private http:HttpClient) { }

  createMenu(menu:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,menu);
  }

  updateMenu(menu:Object):Observable<Object>{
    return this.http.put(`${this.baseURL}`,menu);
  }

  deleteMenu(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }

  getMenusList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getMenuById(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

}
