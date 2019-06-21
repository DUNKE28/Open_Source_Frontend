import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { Insumo } from '../model/insumo';
import { Globals } from '../globals';
import { DetalleOrden } from '../model/detalleOrden';

@Component({
  selector: 'app-lista-insumo',
  templateUrl: './lista-insumo.component.html',
  styleUrls: ['./lista-insumo.component.css'],
  providers: [ Globals ]
})
export class ListaInsumoComponent implements OnInit {
  detalle:DetalleOrden;
  insumos:Insumo[];

  @Input() insumo:Insumo;

  constructor(private menuService:MenuService, private _route: ActivatedRoute,private globals: Globals) { 
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let id = +this._route.snapshot.paramMap.get('menu_id');
    this.menuService.getMenuById(id)
    .subscribe(datos=>this.insumos=datos.insumos);
    var guardado = localStorage.getItem('array');
    this.globals.carrito = JSON.parse(guardado);
  }
  AgregarInsumo(insumo)
  {
    let det = new DetalleOrden();
    det.cantidad = 1;
    det.precio = insumo.precio;
    det.insumo = insumo;
    this.globals.carrito.push(det);
    localStorage.setItem('array',JSON.stringify(this.globals.carrito));
    console.log(this.globals.carrito);


  }

}
