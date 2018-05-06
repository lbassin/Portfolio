import { Component, Input } from '@angular/core';
import { CardAnimations } from './card.animation';
import { IProject } from '../../models/IProject';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  animations: CardAnimations,
})
export class CardComponent {

  @Input() expanded: boolean;
  @Input() blur = true;
  @Input() project: IProject;

}
