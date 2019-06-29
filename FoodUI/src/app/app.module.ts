import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';
import { RegistrarOrdenComponent } from './registrar-orden/registrar-orden.component';
import { ListaOrdenComponent } from './lista-orden/lista-orden.component';
import { HistorialOrdenComponent } from './historial-orden/historial-orden.component';
import { RegistrarInsumoComponent } from './registrar-insumo/registrar-insumo.component';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';
import { ListaInsumoComponent } from './lista-insumo/lista-insumo.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { ListaMenuComponent } from './lista-menu/lista-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalleMenuComponent } from './detalle-menu/detalle-menu.component';
import { LogoutClienteComponent } from './logout-cliente/logout-cliente.component';
import { ListaSedeComponent } from './lista-sede/lista-sede.component';
import { Globals } from './globals';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { RegistrarSedeMenuComponent } from './registrar-sede-menu/registrar-sede-menu.component';
import { RegistrarSedeComponent } from './registrar-sede/registrar-sede.component';
import { RegistrarMenuInsumoComponent } from './registrar-menu-insumo/registrar-menu-insumo.component'



@NgModule({
  declarations: [
    AppComponent,
    ListaSedeComponent,
    LoginClienteComponent,
    LoginAdministradorComponent,
    RegistrarOrdenComponent,
    ListaOrdenComponent,
    HistorialOrdenComponent,
    RegistrarInsumoComponent,
    DetalleOrdenComponent,
    ListaInsumoComponent,
    RegistrarMenuComponent,
    ListaMenuComponent,
    DetalleMenuComponent,
    LogoutClienteComponent,
    ListaCarritoComponent,
    RegistrarSedeMenuComponent,
    RegistrarSedeComponent,
    RegistrarMenuInsumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Globals],
  bootstrap: [LoginClienteComponent , AppComponent]
})
export class AppModule { }
