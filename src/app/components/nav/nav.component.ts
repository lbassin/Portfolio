import { Component } from '@angular/core';
import { NavAnimation } from './nav.animation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: NavAnimation
})
export class NavComponent {

}
