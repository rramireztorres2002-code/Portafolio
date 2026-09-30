import { Routes } from '@angular/router';
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { Items } from './pages/items/items';

export const routes: Routes = [
 
  { path: 'home', redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'portafolio', component: Portafolio},
  { path: 'about', component: About },
  { path: 'items', component: Items},
  { path: '**', redirectTo: 'portafolio', pathMatch: 'full' },
];
