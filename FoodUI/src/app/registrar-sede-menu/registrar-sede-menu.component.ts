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

  menu: Menu;

  sede: Sede;

  constructor(private menuService:MenuService,private sedeService:SedeService) { 

    this.menuService.getMenusList()
    .subscribe(menus=>this.menus=menus);
  }

  ngOnInit() {

  }

  registrarMenuSede(){
    //let empForm: NgForm; //obtener sede  //id
    //let empForm: NgForm;  // obtener menu  //id

    this.menu = new Menu();
    this.menu.id=Number();
    this.menu.nombre=String();


    this.sede = new Sede();
    this.sede.menus=new Array<Menu>();
    this.sede.id = Number();
    this.sede.nombre=String();

  
    //this.sedeService.getSedeById(2).subscribe(sede=>this.sede=sede); //probar id 2
    //this.menuService.getMenuById(3).subscribe(menu=>this.menu=menu); // probar id 3

    this.menu.id=3;
    this.menu.nombre="Vegetariano";

    this.sede.id=2;
    this.sede.nombre="Monterrico";


    this.sede.menus.push(this.menu);
    
    console.log(this.sede);

    console.log("listo");

    //this.sedeService.createSede(this.sede)
    //.subscribe(datos=>console.log(datos), error=>console.log(error));

    console.log("listoN");
  }




}
