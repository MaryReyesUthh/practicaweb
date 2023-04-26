import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentesP/header/header.component';
import { FooterComponent } from './componentesP/footer/footer.component';
import { HomeComponent } from './componentesP/home/home.component';
import { BodyComponent } from './componentesP/body/body.component';
import { ProductosComponent } from './componentesP/productos/productos.component';
import { LoginComponent } from './componentesP/login/login.component';
import { ResgistroComponent } from './componentesP/resgistro/resgistro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PastelesComponent } from './pasteles/pasteles.component';
import { PersonalizadasComponent } from './personalizadas/personalizadas.component';
import { BodaComponent } from './boda/boda.component';
import { MisionComponent } from './mision/mision.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ErrorComponent } from './error/error.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BodyComponent,
    ProductosComponent,
    LoginComponent,
    ResgistroComponent,
    PastelesComponent,
    PersonalizadasComponent,
    BodaComponent,
    MisionComponent,
    ContactanosComponent,
    ErrorComponent,
    ResultadosBusquedaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }












