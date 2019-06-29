import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals';
import { DetalleOrden } from '../model/detalleOrden';
import { OrdenService } from '../orden.service';
import { Orden } from '../model/orden';
import { Time } from '@angular/common';
import { Sede } from '../model/sede';
import { Cliente } from '../model/cliente';
import { DetalleOrdenService } from '../detalle-orden.service';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styles: [],
  providers: [ Globals ]
})
export class ListaCarritoComponent implements OnInit {
  carritos:DetalleOrden[];

  constructor(private globals: Globals, private ordenService:OrdenService, private detalleOrdenService:DetalleOrdenService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    var guardado = localStorage.getItem('array');
    this.globals.carrito = JSON.parse(guardado);
    this.carritos = this.globals.carrito;
    console.log(this.globals.carrito);
  }
  deleteDetalle(id){
    for( var i = 0; i < this.carritos.length; i++){ 
      if (this.carritos[i].id === id) {
        this.carritos.splice(i, 1); 
        i--;
      }
    }
    localStorage.setItem('array',JSON.stringify(this.carritos));
  }

  comprar()
  {
    
    //this.time = JSON.parse(localStorage.getItem('time'));
    //console.log(this.time);
    let orden = new Orden();
    let ids = Array<number>();
    let c ;
    orden.sede= new Sede();
    orden.cliente= new Cliente();
    orden.detallesOrden = new Array<DetalleOrden>();
    orden.cliente.dni = JSON.parse(sessionStorage.getItem('username')); 
    orden.sede.id = JSON.parse(localStorage.getItem('sede_id'));
    orden.estado = 1;
  
    localStorage.setItem('array',JSON.stringify(this.carritos));
    
    c = JSON.parse(localStorage.getItem('count'));

    orden.detallesOrden = this.carritos;


    console.log(orden.detallesOrden);

    orden.detallesOrden.forEach(element => {
      console.log(element);
      this.detalleOrdenService.createDetalleOrden(element).subscribe(datos=>console.log(datos), error=>console.log(error));
    });
  

    for( var i = c-this.carritos.length; i < c; i++){ 
      var t=0;
      orden.detallesOrden[t].id= 0;
      console.log(c);
      console.log(this.carritos.length);
      console.log(orden.detallesOrden[t].id);
      console.log(orden.detallesOrden);
      t++;
    }

    console.log(orden);
    this.ordenService.createOrden(orden)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

}