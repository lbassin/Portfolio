import { Component, OnInit } from '@angular/core';
import { IProject } from '../../models/IProject';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsAnimations } from './projects.animation';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss'],
  animations: ProjectsAnimations,
})
export class ProjectsComponent implements OnInit {

  cardState: Array<string>;
  projects: Array<IProject>;
  expanded: IProject;
  age: any;

  constructor(private projectsService: ProjectsService, private backgroundService: BackgroundService) {
  }

  ngOnInit(): void {
    this.backgroundService.openBackground();
    this.initProjects();
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

  private initProjects(): void {
    this.projects = [];
    this.projectsService.getAll().then((projects: Array<IProject>) => {
      this.projects = projects;

      this.cardState = [];
      this.projects.forEach((project: IProject, index: number) => {
        this.cardState[index] = 'void';

        setTimeout(() => {
          this.cardState[index] = 'show';
        }, 100 + (200 * index));
      });
    });
  }

  private initAge(): void {
    const currentDate: number = new Date().getTime();
    const birthDate: number = new Date('1996-08-14').getTime();
    const numberOfMillisecondInAYear = 31557600000;

    this.age = (currentDate - birthDate) / numberOfMillisecondInAYear;
    this.age = Math.floor(this.age);
  }
}
