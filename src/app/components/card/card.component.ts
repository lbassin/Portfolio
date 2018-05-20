import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('cardDetail') cardDetail: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  zoomImage(event): void {
    const source = event.target;
    const sourcePosition = source.getBoundingClientRect();

    const overlay: HTMLDivElement = this.renderer.createElement('div');
    this.renderer.addClass(overlay, 'overlay-zoom');

    const image: HTMLImageElement = this.renderer.createElement('img');
    image.src = source.src;

    this.renderer.addClass(image, 'zoomed');
    this.renderer.setStyle(image, 'top', sourcePosition.top + 'px');
    this.renderer.setStyle(image, 'left', sourcePosition.left + 'px');
    this.renderer.setStyle(image, 'width', sourcePosition.width + 'px');
    this.renderer.addClass(source, 'hide');

    this.renderer.appendChild(this.cardDetail.nativeElement, overlay);
    this.renderer.appendChild(this.cardDetail.nativeElement, image);

    setTimeout(() => {
      this.renderer.addClass(image, 'move');
      this.renderer.addClass(overlay, 'visible');

      const closeListener = this.renderer.listen('body', 'click', () => {
        this.renderer.removeClass(image, 'move');
        this.renderer.removeClass(overlay, 'visible');
        closeListener(); // Remove listener

        setTimeout(() => {
          this.renderer.removeChild(this.cardDetail.nativeElement, image);
          this.renderer.removeChild(this.cardDetail.nativeElement, overlay);
          this.renderer.removeClass(source, 'hide');
        }, 350);
      });

    }, 1);
  }

}
