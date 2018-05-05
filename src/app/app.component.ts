import {Component, OnInit} from '@angular/core';
import {HomeAnimations} from './home.animation';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: HomeAnimations,
})
export class AppComponent implements OnInit {

  animationState: string;

  ngOnInit(): void {
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';
  }
}
