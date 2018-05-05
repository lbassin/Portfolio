import {Component, OnInit} from '@angular/core';
import {HomeAnimations} from './home.animation';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {
  animationState: string;

  ngOnInit(): void {
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';
  }
}
