import { Routes } from '@angular/router';
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { Items } from './pages/items/items';
import { Search } from './pages/search/search';

export const routes: Routes = [
 
  { path: 'home', redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'portafolio', component: Portafolio},
  { path: 'about', component: About },
  { path: 'items/:id', component: Items},
  { path: 'search/:termino', component: Search},
  { path: '**', redirectTo: 'portafolio', pathMatch: 'full' },
];
