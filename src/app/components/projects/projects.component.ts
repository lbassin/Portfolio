import { Component, OnInit } from '@angular/core';
import { IProject } from '../../models/IProject';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects: Array<IProject>;
  expanded: IProject;
  age: any;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projects = [];
    this.projectsService.getAll().then(projects => this.projects = projects);

    this.initAge();
  }

  toggleProject(project: IProject): void {
    if (this.expanded === project) {
      this.expanded = null;
      return;
    }

    if (this.expanded && this.expanded !== project) {
      this.expanded = null;
      setTimeout(() => {
        this.expanded = project;
      }, 600);
      return;
    }

    this.expanded = project;
  }

  private initAge(): void {
    const currentDate: number = new Date().getTime();
    const birthDate: number = new Date('1996-08-14').getTime();
    const numberOfMillisecondInAYear = 31557600000;

    this.age = (currentDate - birthDate) / numberOfMillisecondInAYear;
    this.age = Math.floor(this.age);
  }
}
