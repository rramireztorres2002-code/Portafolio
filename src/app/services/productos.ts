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
  productosFiltrados: producto[] = [];

  private productosCargados = false;

  constructor(private httpClient: HttpClient) {
    console.log('PRODUCTOS SERVICE CREATED');
    this.cargarProductos();
  }

  private cargarProductos(): Promise<void> {
    return new Promise((resolve, reject) => {

      if (this.productosCargados) {
        resolve();
        return;
      }

      this.httpClient
        .get<producto[]>(
          'https://angular-html-2953d-default-rtdb.firebaseio.com/productors_idx.json'
        )
        .subscribe({
          next: (resp: producto[]) => {
            this.producto = resp ?? [];
            this.cargando = false;
            this.productosCargados = true;
            resolve();
          },
          error: (err) => {
            this.cargando = false;
            reject(err);
          }
        });

    });
  }

  getProducto(id: string) {
    return this.httpClient.get<ProductoDescripcion>(
      `https://angular-html-2953d-default-rtdb.firebaseio.com/productors/${id}.json`
    );
  }

  buscarProducto(termino: string) {

    if (this.producto.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string) {

    if (!termino) {
      this.productosFiltrados = [...this.producto];
      return;
    }

    this.productosFiltrados = [];

    const term = termino.toLowerCase();

    this.producto.forEach(prod => {

      const tituloLower = (prod.titulo || '').toLowerCase();
      const categoriaLower = (prod.categoria || '').toLowerCase();

      if (
        categoriaLower.indexOf(term) >= 0 ||
        tituloLower.indexOf(term) >= 0
      ) {
        this.productosFiltrados.push(prod);
      }

    });


  }
  buscarProductoAsync(termino: string): Promise<void> {
  return new Promise((resolve) => {
    if (this.producto.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
        resolve();
      });
    } else {
      this.filtrarProductos(termino);
      resolve();
    }
  });
}

}