import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Productos } from '../../services/productos';

@Component({
selector: 'app-portafolio',
templateUrl: './portafolio.html',
imports: [NgForOf],
})
export class Portafolio {

constructor(public productos: Productos) {
console.log('PORTAFOLIO CREATED');
console.log('PRODUCTOS:', productos);
}

}
