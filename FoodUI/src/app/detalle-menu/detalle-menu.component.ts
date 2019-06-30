import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../model/menu';
import { MenuService } from '../menu.service';
import { ListaMenuComponent } from '../lista-menu/lista-menu.component';

@Component({
  selector: 'app-detalle-menu',
  templateUrl: './detalle-menu.component.html',
  styleUrls: ['./detalle-menu.component.css']
})
export class DetalleMenuComponent implements OnInit {

 
  orden_id: number;
  
  constructor(private menuService:MenuService,
    private listado:ListaMenuComponent) { }

  ngOnInit() {
  }


}
