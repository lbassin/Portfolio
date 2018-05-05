import {Component, OnInit} from '@angular/core';
import {NavAnimation} from './title.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: NavAnimation,
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}
