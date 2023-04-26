import { Component, Input } from '@angular/core';
import { ServicioFavoritosService } from 'src/app/servicio-favoritos.service';
interface Tarjeta{
  titulo:string;
  Descripcion:string;
  image?:string;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  public ArregloTarjetas: Tarjeta[]=[];

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";
  @Input() dataEntrante:any;
  constructor(private servicioFavorito: ServicioFavoritosService) { }


  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'GELATINA DE FRUTAS', Descripcion: 'Descripcion: Gelatina sabor piña con trozos de duraznos, cerezas y uvas', image: "./assets/Frut1.jpg"
      },
      {titulo:'GELATINA DE DURAZNOS', Descripcion: 'Descripcion: Gelatina sabor durazno con trozos de duraznos', image:"./assets/Frutal2.jpg"
      },
      {titulo:'GELATINA UVA Y QUESO CREMA', Descripcion: 'Descripcion: Gelatina sabor limon con uvas y queso crema', image:"./assets/Frutal3.jpg"
      },
      {titulo:'GELATINA GIRASOL', Descripcion: 'Descripcion; Gelatina sabor durazno y queso crema, con moras azules', image:"./assets/Frutal4.jpg"
      },
      {titulo:'GELATINA FRESA-KIWI', Descripcion: 'Descripcion; Gelatina sabor fresa y tres leches, Decorado con fresa, kiwi y duraznos', image:"./assets/Frutal5.jpg"
      },
      {titulo:'GELATINA FRUTAL', Descripcion: 'Descripcion; Gelatina sabor piña rellena con duraznos, fresa, frambuesa y moras azules', image:"./assets/Frutal6.jpg"
      },
      {titulo:'GELATINA FRESAS CON CREMA', Descripcion: 'Descripcion: Gelatina de fresas y base fresas con crema, decorado con coco y fresas ', image:"./assets/Frutal7.jpg"
      },
      {titulo:'GELATINA MANGO CON CHILE', Descripcion: 'Descripcion: Gelatina sabor mango con chile y chamoy, con trozitos de mango', image:"./assets/Frutal8.jpg"
      },

     ]
     }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
      {data: this.dataEntrante}
    )
  }



}
