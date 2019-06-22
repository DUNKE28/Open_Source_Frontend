import { Component, OnInit, Input, Output } from '@angular/core';
import { Sede } from '../model/sede';
import { SedeService } from '../sede.service';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-lista-sede',
  templateUrl: './lista-sede.component.html',
  styleUrls: ['./lista-sede.component.css']
})
export class ListaSedeComponent implements OnInit {

  sedes : Sede[];

  constructor(private sedeService:SedeService) { }

  ngOnInit() {
    this.loadData();
  } 

  loadData(){
    this.sedeService.getSedeList().subscribe(sedes=>this.sedes=sedes);
  }
}
