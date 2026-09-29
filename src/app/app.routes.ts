import { Routes } from '@angular/router';
import { Portafolio } from './pages/portafolio/portafolio';

export const routes: Routes = [
  { path: '', redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'portafolio', component: Portafolio },
  { path: '**', redirectTo: 'portafolio' },
];
