import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../views/home/home.component').then(comp => comp.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('../views/about/about.component').then(comp => comp.AboutComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('../views/faq/faq.component').then(comp => comp.FaqComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('../views/contact/contact.component').then(comp => comp.ContactComponent),
  },
];
