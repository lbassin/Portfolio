import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {

  @ViewChild('backgroundWrapper') backgroundWrapper: ElementRef;
  @ViewChild('appProjects') appProject: ProjectsComponent;

  animationState: string;

  constructor(private location: Location, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';
    setTimeout(() => {
      this.appProject.ngOnInit();
    }, 100);

    setTimeout(() => {
      this.renderer.setStyle(this.backgroundWrapper.nativeElement, 'opacity', '0');
    }, 700);

    this.location.go('/projects');
  }
}
