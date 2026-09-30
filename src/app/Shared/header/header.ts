import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoPagina } from '../../services/info-pagina';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  constructor(public infoPagina: InfoPagina) {} 

  ngOnInit() {
    // Initialization logic here
  }
}