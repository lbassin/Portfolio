import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];
