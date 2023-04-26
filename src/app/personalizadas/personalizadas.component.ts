import { Component } from '@angular/core';

import { ServicioFavoritosService } from 'src/app/servicio-favoritos.service';
interface Tarjeta{
  titulo:string;
  Descripcion:string;
  image?:string;
}

@Component({
  selector: 'app-personalizadas',
  templateUrl: './personalizadas.component.html',
  styleUrls: ['./personalizadas.component.css']
})
export class PersonalizadasComponent {

  public ArregloTarjetas: Tarjeta[]=[];

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";

  constructor(private servicioFavorito: ServicioFavoritosService) { }


  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'GELATINA CON ROSAS', Descripcion: 'Descripcion: Gelatina de mosaico con fotografia comestible y flores de gelatina', image: "./assets/Carrusel1.jpg"
      },
      {titulo:'GELATINA DE GANSITO', Descripcion: 'Descripcion: Gelatina tres leches con relleno de gansito, con drip de chocolate y chispas', image:"./assets/Carrusel2.jpg"
      },
      {titulo:'GELATINA UNICORNIO', Descripcion: 'Descripcion: Gelatina personalizada con imagenes comestibles, sabor leche condensada', image:"./assets/Carrusel4.png"
      },
      {titulo:'GELATINA UNICORNIO2', Descripcion: 'Descripcion: Gelatina tres leches decorada con flores de gelatina(topper unicornio) ', image:"./assets/Carrusel5.jpg"
      },
      {titulo:'GELATINA CON GELAPALETAS', Descripcion: 'Descripcion: Gelatina sabor leche condensada y piña, imagenes comestibles(incluye 24 paletas)', image:"./assets/Personalizada1.jpg"
      },
      {titulo:'GELATINA SONIC', Descripcion: 'Descripcion: Gelatina Sonic, imagen comestible, sabor nuez, relleno de duraznos', image:"./assets/Personalizada2.jpg"
      },
      {titulo:'GELATINA PRINCESA', Descripcion: 'Descripcion: Gelatina sabor coco(incluye 10 princesas individuales)', image:"./assets/Personalizada3.jpg"
      },
      {titulo:'GELATINA LASTAS DE CERVEZA', Descripcion: 'Descripcion: Gelatina de latas de cerveza sabor nuez, rellena de chocorroles', image:"./assets/Personalizada4.jpg"
      },

     ]
     }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
   
    )
  }


}
