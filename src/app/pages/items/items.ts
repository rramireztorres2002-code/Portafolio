import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../services/productos';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-items',
  styleUrl: './items.css',
  templateUrl: './items.html',
  imports: [NgStyle]
})
export class Items implements OnInit {

  productoDescripcion!: ProductoDescripcion;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    public productos: Productos,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log('ID:', this.id);

        this.productos.getProducto(this.id).subscribe({
          next: (producto) => {
            console.log('DATOS DEL PRODUCTO:', producto);
            this.productoDescripcion = producto;
            this.cdr.detectChanges(); 
          },
          error: (error) => {
            console.error('ERROR:', error);
          }
        });
      }
    });
  }
}
