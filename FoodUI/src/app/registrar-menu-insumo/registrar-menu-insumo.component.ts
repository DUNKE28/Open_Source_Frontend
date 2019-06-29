import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';
import { Insumo } from '../model/insumo';
import { MenuService } from '../menu.service';
import { InsumoService } from '../insumo.service';

@Component({
  selector: 'app-registrar-menu-insumo',
  templateUrl: './registrar-menu-insumo.component.html',
  styleUrls: ['./registrar-menu-insumo.component.css']
})
export class RegistrarMenuInsumoComponent implements OnInit {
  menus:Menu[];
  insumos:Insumo[];

  menu_id: number;
  insumo_id: number;

  menu: Menu;
  insumo: Insumo;

  constructor(private menuService:MenuService,private insumoService:InsumoService) { 
    this.insumoService.getInsumosList().subscribe(insumos=>this.insumos=insumos);
    this.menuService.getMenusList()
    .subscribe(menus=>this.menus=menus);
  }

  ngOnInit() {

  }

  registrarInsumoMenu(){
    this.menu = new Menu();
    this.insumo = new Insumo();

    for (let index = 0; index < this.insumos.length; index++) {
      if(this.insumos[index].id==this.insumo_id) this.insumo = this.insumos[index];
    }

    for (let index = 0; index < this.menus.length; index++) {
      if(this.menus[index].id==this.menu_id) this.menu = this.menus[index];
    }

    this.menu.insumos.push(this.insumo);

    this.menuService.createMenu(this.menu)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

}
