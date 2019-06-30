import { Component, OnInit } from '@angular/core';
import { Insumo } from '../model/insumo';
import { InsumoService } from '../insumo.service';
import { MenuService } from '../menu.service';
import { SedeService } from '../sede.service';
import { Menu } from '../model/menu';
import { Sede } from '../model/sede';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-insumo',
  templateUrl: './registrar-insumo.component.html',
  styleUrls: ['./registrar-insumo.component.css']
})
export class RegistrarInsumoComponent implements OnInit {

  menus:Menu[];
  sedes:Sede[];
  
  menu_id: number;
  sede_id: number;

  insumo_tipo: number;
  insumo: Insumo = new Insumo();

  menu: Menu = new Menu();
  sede: Sede;

  constructor(private insumoService:InsumoService,private menuService:MenuService,private sedeService:SedeService, private router:Router) { 
  this.sedeService.getSedeList().subscribe(sedes=>this.sedes=sedes);
  }

  ngOnInit() {
  }

  load()
  {
    if(this.sede_id != null)
    {

      for (let index = 0; index < this.sedes.length; index++) 
      {
        if(this.sedes[index].id==this.sede_id) 
        this.menus = this.sedes[index].menus;
      }
    }
  }
  registrarInsumo(){

    let igual = false;
    this.insumo.tipo = Number();
    this.insumo.tipo = +this.insumo_tipo;
    for (let index = 0; index < this.menus.length; index++) 
    {if(this.menus[index].id==this.menu_id) this.menu = this.menus[index];}

   this.menu.insumos.forEach(element => {
     if(element.nombre == this.insumo.nombre) igual = true;
   });
   if(igual =! true)
   {
    this.insumoService.createInsumo(this.insumo).subscribe(datos =>{ this.menu.insumos.push(datos);
      this.menuService.createMenu(this.menu).subscribe(datos=>console.log(this.menu));
      this.router.navigate(["listaSede"]);
  });
}
  
  }
}
