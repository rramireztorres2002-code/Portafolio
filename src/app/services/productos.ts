import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto.interface';

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
      .subscribe((resp: producto[]) => {
        this.producto = resp;
        
        setTimeout(() => {
          this.cargando = false;
        }, 1000);
      
      }
        
    )
  }
}