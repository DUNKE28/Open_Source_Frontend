import { Component, OnInit } from '@angular/core';
import { Orden } from '../model/orden';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-lista-orden',
  templateUrl: './lista-orden.component.html',
  styleUrls: ['./lista-orden.component.css']
})
export class ListaOrdenComponent implements OnInit {

  ordenes:Orden[]

  constructor(private ordenService:OrdenService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData()
  {
    let cliente = JSON.parse(sessionStorage.getItem('username'));
    this.ordenService.getOrdenesList().subscribe(datos => this.ordenes=datos.filter( x => x.cliente.dni == cliente).sort((a, b) => a.fecha < b.fecha));
  }
}
