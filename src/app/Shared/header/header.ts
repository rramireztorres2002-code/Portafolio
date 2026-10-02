import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InfoPagina } from '../../services/info-pagina';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  constructor(public infoPagina: InfoPagina,private router: Router) {} 

  ngOnInit() {
    
  }
  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);

  }
}