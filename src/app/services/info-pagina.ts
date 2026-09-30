
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina as InfoPaginaInterface } from '../interfaces/info-paginas.interface';

@Injectable({
providedIn: 'root'
})
export class InfoPagina {

InfoPagina: InfoPaginaInterface = {};
cargada = false;

constructor(public httpClient: HttpClient) {
this.cargarInfo();
}

private cargarInfo() {


console.log('Servicio de infoPagina listo');

this.httpClient
  .get<any>(
    'https://angular-html-2953d-default-rtdb.firebaseio.com/equipo.json'
  )
  .subscribe({
    next: (resp) => {
      this.cargada = true;
      this.InfoPagina = resp;

      console.log('INFO PAGINA DATA LOADED:', resp);
    },
    error: (error) => {
      console.error('ERROR LOADING INFO PAGINA:', error);
    }
  });


}

}




