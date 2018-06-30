import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectResolve } from './services/project.resolve';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectsComponent,
    resolve: {
      project: ProjectResolve
    }
  },
  {
    path: '**',
    component: HomeComponent,
  }
];
