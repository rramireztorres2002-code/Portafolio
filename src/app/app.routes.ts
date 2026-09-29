import { Routes } from '@angular/router';
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { Items } from './pages/items/items';

export const routes: Routes = [
  // Default path redirects to the portfolio page
  { path: '', redirectTo: 'portafolio', pathMatch: 'full' },

  // Standard application routes
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'items', component: ItemsComponent },

  // Wildcard catch-all redirects broken URLs back to portfolio
  { path: '**', redirectTo: 'portafolio', pathMatch: 'full' },
];
