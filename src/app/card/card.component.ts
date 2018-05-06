import { Component, Input } from '@angular/core';
import { CardAnimations } from './card.animation';
import { IProject } from '../IProject';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  animations: CardAnimations,
})
export class CardComponent {

  @Input() expanded: IProject = null;
  @Input() blur = true;

}
