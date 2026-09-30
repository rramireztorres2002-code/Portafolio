import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina as InfoPaginaInterface } from '../interfaces/info-paginas.interface';

@Injectable({ providedIn: 'root' })
export class InfoPagina {
   InfoPagina: InfoPaginaInterface = {};
    cargada = false;

    constructor(public httpClient: HttpClient) {
        console.log('Servicio de infoPagina listo');
        this.httpClient.get<any>('assets/data/data-pagina.json')
            .subscribe((resp: any) => {
               this.cargada = true;
               this.InfoPagina = resp;
               console.log(resp);
            });
    }
}
