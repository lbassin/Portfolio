import {Component, OnInit} from '@angular/core';
import {HomeAnimations} from './home.animation';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: HomeAnimations,
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}
