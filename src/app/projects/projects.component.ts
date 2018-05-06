import { Component, OnInit } from '@angular/core';
import { IProject } from '../IProject';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects: Array<IProject>;
  expanded: IProject;

  ngOnInit(): void {
    this.projects = [
      {name: 'ok', image: 'https://dummyimage.com/240x240'},
      {name: 'ok', image: 'https://dummyimage.com/240x240'},
      {name: 'ok', image: 'https://dummyimage.com/240x240'},
      {name: 'ok', image: 'https://dummyimage.com/240x240'},
    ];
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
