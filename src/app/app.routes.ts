import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../views/chat-ai/chat-ai.component').then(comp => comp.ChatAiComponent),
  }
];
