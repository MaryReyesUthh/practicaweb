import { Component } from '@angular/core';

import { ServicioFavoritosService } from 'src/app/servicio-favoritos.service';
interface Tarjeta{
  titulo:string;
  Descripcion:string;
  image?:string;
}



@Component({
  selector: 'app-pasteles',
  templateUrl: './pasteles.component.html',
  styleUrls: ['./pasteles.component.css']
})
export class PastelesComponent {
  public ArregloTarjetas: Tarjeta[]=[];

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";

  constructor(private servicioFavorito: ServicioFavoritosService) { }


  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'PASTEL CON ROSAS', Descripcion: 'Descripcion: Pastel sabor vainilla, decorado con fondant y rosas comestibles', image: "./assets/Pastel1.jpg"
      },
      {titulo:'PASTEL PERSONALIZADO', Descripcion: 'Descripcion: Pastel sabor fresa decorado con personaje de fondant, relleno de durazno', image:"./assets/Pastel2.jpg"
      },
      {titulo:'PASTEL CON MACARONS', Descripcion: 'Descripcion: Pastel sabor fresa, rellena de mouse de fresa, decorada con macarons', image:"./assets/Pastel4.jpg"
      },
      {titulo:'PASTEL SIRENITA', Descripcion: 'Descripcion: Pastel de 2 pisos, sabor vainilla, rellena de fresas(topper sirenita) ', image:"./assets/Pastel5.jpg"
      },
      {titulo:'PASTEL FRESA-DURAZNO', Descripcion: 'Descripcion: Pastel sabor chocolate, rellena y decorada con fresas y duraznos', image:"./assets/Pastel6.jpg"
      },
      {titulo:'PASTEL BTS', Descripcion: 'Descripcion: Pastel 2 pisos, sabor vainilla y chocolate, decoración a elegir', image:"./assets/Pastel7.png"
      },
      {titulo:'PASTEL ROSA', Descripcion: 'Descripcion: Pastel Gourmet, sabor fresa-chocolate decorado con macarons y flores comestibles', image:"./assets/Pastel8.jpg"
      },
      {titulo:'PASTEL 3 LECHES', Descripcion: 'Descripcion: Pastel 3 leches, relleno de cajeta, decorado con drip de chocolate', image:"./assets/Pastel9.jpg"
      },

     ]
     }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
   
    )
  }




}
