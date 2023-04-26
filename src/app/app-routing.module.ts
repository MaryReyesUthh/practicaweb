import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './componentesP/home/home.component';
import { ProductosComponent } from './componentesP/productos/productos.component';
import { LoginComponent } from './componentesP/login/login.component';

import { ResgistroComponent } from './componentesP/resgistro/resgistro.component';
import { PastelesComponent } from './pasteles/pasteles.component';
import { PersonalizadasComponent } from './personalizadas/personalizadas.component';
import { BodaComponent } from './boda/boda.component';
import { MisionComponent } from './mision/mision.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: 'home',component:HomeComponent},
  {path: 'frutales',component:ProductosComponent},
  {path: 'personalizadas',component:PersonalizadasComponent},
  {path: 'fiesta',component:PastelesComponent},
  {path: 'boda',component:BodaComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:ResgistroComponent},
  {path: 'mision',component:MisionComponent},
  {path: 'contactanos',component:ContactanosComponent},
  {path: '**',component:ErrorComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
