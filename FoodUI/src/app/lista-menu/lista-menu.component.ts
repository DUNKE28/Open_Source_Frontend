import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../model/menu';
import { MenuService } from '../menu.service';
import { Sede } from '../model/sede';
import { SedeService } from '../sede.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css']
})
export class ListaMenuComponent implements OnInit {

  menus:Menu[];

  constructor(private menuService:MenuService,private sedeService:SedeService,
              private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let id = +this._route.snapshot.paramMap.get('sede_id');
    this.sedeService.getSedeById(id)
    .subscribe(datos=>this.menus=datos.menus);
  }

}
