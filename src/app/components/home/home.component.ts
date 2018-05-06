import { Component, OnInit } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {
  animationState: string;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';
    this.location.replaceState('/projects');
  }
}
