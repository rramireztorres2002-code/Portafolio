import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoPagina } from '../../services/info-pagina';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  year = new Date().getFullYear();
mailTo: any;
  constructor(public infoPagina: InfoPagina) {} 
  
    ngOnInit() {}
}
