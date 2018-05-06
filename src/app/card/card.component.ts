import { Component, Input, OnInit } from '@angular/core';
import { CardAnimations } from './card.animation';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  animations: CardAnimations,
})
export class CardComponent implements OnInit {

  @Input() expanded = null;

  ngOnInit(): void {
    this.expanded = false;
  }
}
