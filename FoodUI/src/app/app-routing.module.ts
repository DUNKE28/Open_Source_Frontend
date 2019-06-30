import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListaMenuComponent } from "./lista-menu/lista-menu.component";
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LogoutClienteComponent } from './logout-cliente/logout-cliente.component';
import { ListaSedeComponent } from './lista-sede/lista-sede.component';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component'
import { AuthGaurdService } from './auth-gaurd.service';
import { ListaInsumoComponent } from './lista-insumo/lista-insumo.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';
import { RegistrarSedeMenuComponent } from './registrar-sede-menu/registrar-sede-menu.component';
import { RegistrarSedeComponent } from './registrar-sede/registrar-sede.component';
import { RegistrarInsumoComponent } from './registrar-insumo/registrar-insumo.component';
import { RegistrarMenuInsumoComponent } from './registrar-menu-insumo/registrar-menu-insumo.component';

const routes: Routes = [
    {path:'', redirectTo:'listaSede', pathMatch:'full'},
    {path:'login', component:LoginClienteComponent},
    {path:'listaSede', component:ListaSedeComponent},
    {path:'listarMenus/:sede_id', component:ListaMenuComponent, children:[  {path:'listarInsumos/:menu_id', component:ListaInsumoComponent}]},
    {path:'listarCarrito', component:ListaCarritoComponent},
    {path:'listarDetalleOrden/:orden_id', component:DetalleOrdenComponent},
    {path:'registrarMenu', component:RegistrarMenuComponent},
    {path:'sedeMenu', component:RegistrarSedeMenuComponent},
    {path:'logout', component:LogoutClienteComponent},
    {path:'listarOrdenes', component:ListaOrdenComponent},
    {path:'registrarSede', component:RegistrarSedeComponent},
    {path:'registrarInsumo', component:RegistrarInsumoComponent},
    {path:'menuInsumo', component:RegistrarMenuInsumoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}