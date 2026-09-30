import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { InfoPagina } from '../../services/info-pagina';


@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About implements OnInit {
  constructor(public infoPagina: InfoPagina) { }
  ngOnInit() { 

  }

} 