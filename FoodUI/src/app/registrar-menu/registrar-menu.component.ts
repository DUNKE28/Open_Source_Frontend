import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../model/menu';
import { Sede } from '../model/sede';
import { SedeService } from '../sede.service';
import { InsumoService } from '../insumo.service';
import { Insumo } from '../model/insumo';

@Component({
  selector: 'app-registrar-menu',
  templateUrl: './registrar-menu.component.html',
  styleUrls: ['./registrar-menu.component.css']
})
export class RegistrarMenuComponent implements OnInit {

  sedes:Sede[];
  sede: Sede = new Sede();
  sede_id: number;




  menu: Menu = new Menu();
  menu2: Menu = new Menu();
  menu_temp: Menu = new Menu();

  constructor(private menuService:MenuService,private sedeService:SedeService) { 
    this.sedeService.getSedeList().subscribe(sedes=>this.sedes=sedes);

  }

  ngOnInit() {

  }
  registrarMenuSede()
  {

    for (let index = 0; index < this.sedes.length; index++) {
      if(this.sedes[index].id==this.sede_id) {this.sede = this.sedes[index];}
    }
    this.menuService.createMenu(this.menu).subscribe( datos =>{ this.sede.menus.push(datos);
      this.sedeService.createSede(this.sede).subscribe(datos=>console.log(this.sede));
  });
  }

}