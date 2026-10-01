import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.html',
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class Portafolio {

  constructor(public productos: Productos) {}

}
