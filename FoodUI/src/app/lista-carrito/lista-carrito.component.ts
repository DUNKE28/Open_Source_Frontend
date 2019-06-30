import { Component, OnInit, Input, Output } from '@angular/core';
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
  styles: ['./lista-carrito.component.css'],
  providers: [ Globals ]
})
export class ListaCarritoComponent implements OnInit {
  carritos:DetalleOrden[];
  data: boolean = false;

  constructor(private globals: Globals, private ordenService:OrdenService, private detalleOrdenService:DetalleOrdenService) 
  { 
   
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    var guardado = localStorage.getItem('array');
    this.globals.carrito = JSON.parse(guardado);
    this.carritos = this.globals.carrito;

    if(this.carritos.length != 0 || this.carritos.length != null)
    {
    this.data=true;
    }
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

  calcular(id)
  {
    for( var i = 0; i < this.carritos.length; i++){ 
      if (this.carritos[i].id == id) 
      {
        this.carritos[i].precio = this.carritos[i].insumo.precio * this.carritos[i].cantidad;
      }
    }
  }
  comprar()
  {
    let orden = new Orden();
    orden.sede= new Sede();
    orden.cliente= new Cliente();
    orden.fecha = new Date();
    orden.detallesOrden = new Array<DetalleOrden>();

    orden.cliente.dni = JSON.parse(sessionStorage.getItem('username')); 
    orden.sede.id = JSON.parse(localStorage.getItem('sede_id'));
    orden.estado = 1;

    this.ordenService.createOrden(orden).subscribe( j => {

        this.carritos.forEach(element => 
       {
           element.orden = j;
           this.detalleOrdenService.createDetalleOrden(element).subscribe(x => 
           {
             orden.detallesOrden.push(x);
           });
        });
        localStorage.removeItem('array');
        this.data=false;
        this.loadData();
   
    });
  
  }
  
  
  cancelar()
  {
    localStorage.removeItem('array');
    this.data=false;
    this.loadData();
   
  }

}
