import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  producto: producto[] = [];
  cargando = true;

  constructor(private httpClient: HttpClient) {

    console.log('PRODUCTOS SERVICE CREATED');

    this.httpClient
      .get<producto[]>(
        'https://angular-html-2953d-default-rtdb.firebaseio.com/productors_idx.json'
      )
      .subscribe({
        next: (resp: producto[]) => {

          this.producto = resp ?? [];

          this.cargando = false;

          console.log('PRODUCTOS:', this.producto);
          console.log('CARGANDO:', this.cargando);
        }
      });
  }
  getProducto(id: string) {
  return this.httpClient.get<ProductoDescripcion>(
    `https://angular-html-2953d-default-rtdb.firebaseio.com/productors/${id}.json`
  );
}
  
}