import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Shared/header/header';
import { Footer } from './Shared/footer/footer';
import { Portafolio } from './pages/portafolio/portafolio';

@Component({
  imports: [Header, Footer, Portafolio],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Portafolio');
}
