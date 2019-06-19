import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListaMenuComponent } from "./lista-menu/lista-menu.component";
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LogoutClienteComponent } from './logout-cliente/logout-cliente.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
    {path:'', redirectTo:'menu', pathMatch:'full'},
    {path:'login', component:LoginClienteComponent},
    {path:'listar', component:ListaMenuComponent,canActivate:[AuthGaurdService]},
    {path:'nuevo', component:RegistrarMenuComponent,canActivate:[AuthGaurdService]},
    {path:'logout', component:LogoutClienteComponent,canActivate:[AuthGaurdService]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}