import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public productos: Productos,
    private cdr: ChangeDetectorRef     // ← AGREGA ESTO
  ) {}

ngOnInit() {
  this.route.params.subscribe(async params => {
    const termino = params['termino'];
    console.log('BÚSQUEDA:', termino);

    
    await this.productos.buscarProducto(termino);

    // Forzar la detección de cambios
    this.cdr.detectChanges();
  });
  }

}
