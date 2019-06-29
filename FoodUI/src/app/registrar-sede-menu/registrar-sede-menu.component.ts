import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Menu } from '../model/menu';
import { Sede } from '../model/sede';
import { MenuService } from '../menu.service';
import { SedeService } from '../sede.service';
import * as moment from 'moment';

@Component({
  selector: 'app-registrar-sede-menu',
  templateUrl: './registrar-sede-menu.component.html',
  styleUrls: ['./registrar-sede-menu.component.css']
})
export class RegistrarSedeMenuComponent implements OnInit {

  menus:Menu[];
  sedes:Sede[];

  menu_id: number;
  sede_id: number;

  menu: Menu;
  sede: Sede;

  constructor(private menuService:MenuService,private sedeService:SedeService) { 
    this.sedeService.getSedeList().subscribe(sedes=>this.sedes=sedes);
    this.menuService.getMenusList()
    .subscribe(menus=>this.menus=menus);
  }

  ngOnInit() {

  }

  registrarMenuSede(){

    this.menu = new Menu();


    this.sede = new Sede();

    for (let index = 0; index < this.sedes.length; index++) {
      if(this.sedes[index].id==this.sede_id) this.sede = this.sedes[index];
    }

    for (let index = 0; index < this.menus.length; index++) {
      if(this.menus[index].id==this.menu_id) this.menu = this.menus[index];
    }

    this.sede.menus.push(this.menu);

    this.sedeService.createSede(this.sede)
    .subscribe(datos=>console.log(datos), error=>console.log(error));

  }
}
