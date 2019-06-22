import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals';
import { DetalleOrden } from '../model/detalleOrden';
import { OrdenService } from '../orden.service';
import { Orden } from '../model/orden';
import { Time } from '@angular/common';
import { Sede } from '../model/sede';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styles: [],
  providers: [ Globals ]
})
export class ListaCarritoComponent implements OnInit {
  carritos:DetalleOrden[];
   time:Time;
  constructor(private globals: Globals, private ordenService:OrdenService ) { }

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
    orden.sede= new Sede();
    orden.cliente= new Cliente();
    orden.detallesOrden = new Array<DetalleOrden>();
    orden.horaEntrega = new Date();
    let date = new Date();
    
    orden.fecha = date;
    orden.horaEntrega = date;
    console.log(date.getHours()-date.getHours()+1);

    orden.cliente.dni = JSON.parse(sessionStorage.getItem('username')); 
    orden.sede.id = JSON.parse(localStorage.getItem('sede_id'));
    orden.estado = 1;
    orden.detallesOrden = this.carritos;
    console.log(orden);
   // this.ordenService.createOrden(this.orden);

    
  }

}
