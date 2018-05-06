import { Component, OnInit } from '@angular/core';
import { IProject } from '../IProject';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects: Array<IProject>;
  expanded: IProject;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projects = [];
    this.projectsService.getAll().then(projects => this.projects = projects);
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
}
