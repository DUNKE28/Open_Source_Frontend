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

  @Input() menu:Menu;
  
  constructor(private menuService:MenuService,
    private listado:ListaMenuComponent) { }

  ngOnInit() {
  }

  deleteMenu(){
    this.menuService.deleteMenu(this.menu.id)
    .subscribe(datos=>{this.listado.loadData();})
  }

}
