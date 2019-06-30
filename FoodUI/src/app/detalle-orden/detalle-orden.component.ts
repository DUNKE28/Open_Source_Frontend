import { Component, OnInit } from '@angular/core';
import { DetalleOrden } from '../model/detalleOrden';
import { DetalleOrdenService } from '../detalle-orden.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  detalles : DetalleOrden[]; 
  constructor(private detalleOrden: DetalleOrdenService, private _route:ActivatedRoute) 
  { 
  }

  ngOnInit() {
    this.load();
  } 
  load()
  {
    let id = +this._route.snapshot.paramMap.get('orden_id');
    console.log(id);
    this.detalleOrden.getDetalleList().subscribe(datos => this.detalles = datos.filter(x => x.orden.id == id));
  }

}
