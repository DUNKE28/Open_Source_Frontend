import { Component, OnInit } from '@angular/core';
import { Insumo } from '../model/insumo';
import { InsumoService } from '../insumo.service';

@Component({
  selector: 'app-registrar-insumo',
  templateUrl: './registrar-insumo.component.html',
  styleUrls: ['./registrar-insumo.component.css']
})
export class RegistrarInsumoComponent implements OnInit {
  insumo_tipo: number;
  insumo: Insumo = new Insumo();

  constructor(private insumoService:InsumoService) { }

  ngOnInit() {
  }
  registrarInsumo(){
    this.insumo.tipo = Number()
    this.insumo.tipo = +this.insumo_tipo;

    console.log(this.insumo);

    this.insumoService.createInsumo(this.insumo)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.insumo = new Insumo();
  }
}
