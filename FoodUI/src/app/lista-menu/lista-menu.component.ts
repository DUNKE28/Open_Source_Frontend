import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css']
})
export class ListaMenuComponent implements OnInit {

  menus:Menu[];

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.menuService.getMenusList()
    .subscribe(menus=>this.menus=menus);
  }

}
