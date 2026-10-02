import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  templateUrl: './portafolio.html',
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class Portafolio implements OnInit {

  constructor(
    public productos: Productos,
    private cdr: ChangeDetectorRef   
  ) {}

  ngOnInit() {
    
    setInterval(() => {
      this.cdr.detectChanges();
    }, 500);
  }

}
