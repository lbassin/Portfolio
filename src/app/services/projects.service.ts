import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../models/IProject';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Promise<Array<IProject>> {
    return new Promise<Array<IProject>>(resolve => {

      this.http.get('/assets/projects.json')
        .subscribe((projects: Array<IProject>) => {
          resolve(projects);
        }, () => {
          resolve([]);
        });
    });
  }
}
