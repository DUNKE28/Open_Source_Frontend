import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-registrar-menu',
  templateUrl: './registrar-menu.component.html',
  styleUrls: ['./registrar-menu.component.css']
})
export class RegistrarMenuComponent implements OnInit {

  menu: Menu = new Menu();

  constructor(private MenuService:MenuService) { }

  ngOnInit() {
  }

  registrarMenu(){
    this.MenuService.createMenu(this.menu)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.menu = new Menu();
  }

}