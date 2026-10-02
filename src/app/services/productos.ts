import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  producto: producto[] = [];
  cargando = true;
  productosFiltrados: producto[] = [];

  private productosCargados = false;

  constructor(private httpClient: HttpClient) {
    console.log('1️⃣ CONSTRUCTOR INICIADO');
    this.cargarProductos();
    console.log('2️⃣ cargarProductos() LLAMADO');
  }

  private cargarProductos(): Promise<void> {
    return new Promise((resolve, reject) => {

      console.log('3️⃣ DENTRO DE LA PROMESA');

      if (this.productosCargados) {
        console.log('3.1 Ya cargados, saliendo');
        resolve();
        return;
      }

      console.log('4️⃣ ANTES DE HACER LA PETICIÓN HTTP');

      this.httpClient
        .get<producto[]>(
          'https://angular-html-2953d-default-rtdb.firebaseio.com/productors_idx.json'
        )
        .pipe(
          timeout(10000),
          catchError((err) => {
            console.error('5️⃣ CATCH ERROR (dentro del pipe):', err);
            this.cargando = false;
            return throwError(() => err);
          })
        )
        .subscribe({
          next: (resp: producto[]) => {
            console.log('6️⃣ RESPUESTA RECIBIDA:', resp);
            this.producto = resp ?? [];
            this.cargando = false;
            this.productosCargados = true;
            console.log('7️⃣ PRODUCTOS =', this.producto.length, '| CARGANDO =', this.cargando);
            resolve();
          },
          error: (err) => {
            console.error('8️⃣ ERROR EN SUBSCRIBE:', err);
            this.cargando = false;
            this.producto = [];
            reject(err);
          },
          complete: () => {
            console.log('9️⃣ PETICIÓN COMPLETADA (complete)');
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