import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListaMenuComponent } from "./lista-menu/lista-menu.component";
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';


const routes: Routes = [
    {path:'', redirectTo:'menu', pathMatch:'full'},
    {path:'listar', component:ListaMenuComponent},
    {path:'nuevo', component:RegistrarMenuComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}