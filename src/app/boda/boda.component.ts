import { Component } from '@angular/core';

import { ServicioFavoritosService } from 'src/app/servicio-favoritos.service';
interface Tarjeta{
  titulo:string;
  Descripcion:string;
  image?:string;
}

@Component({
  selector: 'app-boda',
  templateUrl: './boda.component.html',
  styleUrls: ['./boda.component.css']
})
export class BodaComponent {
  public ArregloTarjetas: Tarjeta[]=[];

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";

  constructor(private servicioFavorito: ServicioFavoritosService) { }


  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'PASTEL CON ROSAS', Descripcion: 'Descripcion: Pastel sabor vainilla, decorado con fondant y rosas comestibles', image: "./assets/boda1.jpg"
      },
      {titulo:'PASTEL PERSONALIZADO', Descripcion: 'Descripcion: Pastel 3 leches, sabor fresa, relleno de durazno', image:"./assets/boda2.jpg"
      },
      {titulo:'PASTEL PARA XV AÑOS', Descripcion: 'Descripcion: Pastel sabor fresa, rellena de mouse de fresa, decorada con macarons', image:"./assets/boda3.jpg"
      },
      {titulo:'PASTEL 3 PISOS', Descripcion: 'Descripcion: Pastel de 3 pisos, sabor vainilla, rellena de fresas(Flores comestibles) ', image:"./assets/boda4.jpg"
      },
      {titulo:'PASTEL FRESA-DURAZNO', Descripcion: 'Descripcion: Pastel sabor chocolate, rellena y decorada con fresas y duraznos', image:"./assets/boda5.jpg"
      },
      {titulo:'PASTEL XV', Descripcion: 'Descripcion: Pastel 2 pisos, sabor vainilla y chocolate, decoración a elegir', image:"./assets/boda6.jpg"
      },
      {titulo:'PASTEL SENCILLO', Descripcion: 'Descripcion: Pastel sabor fresa-chocolate decorado con flores comestibles', image:"./assets/boda7.jpg"
      },
      {titulo:'PASTEL 3 LECHES', Descripcion: 'Descripcion: Pastel 3 leches, relleno de cajeta, decorado con drip de chocolate y rosas', image:"./assets/boda8.jpg"
      },

     ]
     }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
   
    )
  }


}
