import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { IProject } from '../models/IProject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectResolve implements Resolve<IProject> {

  constructor(private projectsService: ProjectsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject> {
    return new Observable<IProject>((observer) => {
      this.projectsService.getAll().then((projects: IProject[]) => {

        const project = projects.find((element: IProject) => {
          return element.url === route.params.id;
        });

        if (!project) {
          this.router.navigate(['/projects']); // TODO : Improve User experience
          observer.next(null);
          observer.complete();
          return;
        }

        observer.next(project);
        observer.complete();
      });
    });
  }
}
