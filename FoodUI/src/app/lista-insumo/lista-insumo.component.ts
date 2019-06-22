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
  c:number;

  @Input() insumo:Insumo;

  constructor(private menuService:MenuService, private _route: ActivatedRoute,private globals: Globals) { 
    this.c=1;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let id = +this._route.snapshot.paramMap.get('menu_id');
    this.menuService.getMenuById(id)
    .subscribe(datos=>this.insumos=datos.insumos);
    
    var guardado = localStorage.getItem('array');
    if(guardado!=null)
      this.globals.carrito = JSON.parse(guardado);
    
    var guardado2 = localStorage.getItem('count');
    if(guardado2!=null)
      this.c = JSON.parse(guardado2);
  }
  AgregarInsumo(insumo)
  {
    let det = new DetalleOrden();
    det.id = this.c;
    this.c +=1;
    det.cantidad = 1;
    det.precio = insumo.precio;
    det.insumo = insumo;
    console.log(insumo);
    this.globals.carrito.push(det);
    localStorage.setItem('array',JSON.stringify(this.globals.carrito));
    localStorage.setItem('count',JSON.stringify(this.c));
    console.log(this.c);
  }

}
