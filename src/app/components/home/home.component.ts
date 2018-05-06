import { Component, OnInit } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {
  animationState: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';

    setTimeout(() => {
      this.router.navigate(['/projects']);
    }, 1000);
  }
}
