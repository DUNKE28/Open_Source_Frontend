import { Component, OnInit } from '@angular/core';
import { Sede } from '../model/sede';
import { SedeService } from '../sede.service';

@Component({
  selector: 'app-registrar-sede',
  templateUrl: './registrar-sede.component.html',
  styleUrls: ['./registrar-sede.component.css']
})
export class RegistrarSedeComponent implements OnInit {

  sede: Sede = new Sede();

  constructor(private sedeService:SedeService) { }

  ngOnInit() {
  }

  registrarSede(){
    console.log(this.sede);


    this.sedeService.createSede(this.sede)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.sede = new Sede();
  }

}
