import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { BackgroundService } from '../../services/background.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {

  @ViewChild('backgroundWrapper') backgroundWrapper: ElementRef;
  @ViewChild('appProjects') appProject: ProjectsComponent;

  animationState: string;

  constructor(private location: Location, private backgroundService: BackgroundService, private router: Router) {
  }

  ngOnInit(): void {
    this.backgroundService.closeBackground();
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';
    this.backgroundService.openBackground();

    setTimeout(() => {
      this.router.navigate(['/projects']);
    }, 350);

  }
}
