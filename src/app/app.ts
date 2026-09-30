import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './Shared/header/header';
import { Footer } from './Shared/footer/footer';
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { Items } from './pages/items/items';

import { InfoPagina } from './services/info-pagina';
import { Productos } from './services/productos';

@Component({
selector: 'app-root',

imports: [
Header,
Footer,
Portafolio,
About,
Items,
RouterOutlet
],

styleUrl: './app.css',
templateUrl: './app.html',
})
export class App {

protected readonly title = signal('Portafolio');

constructor(
public infoPagina: InfoPagina,
public productos: Productos
) {


console.log('APP CREATED');
console.log('PRODUCTOS INSTANCE:', productos);


}

}
