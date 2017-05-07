import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalNewComponent } from './animal-new/animal-new.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AnimalListComponent
  },
  {
    path: 'new',
    component: AnimalNewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
