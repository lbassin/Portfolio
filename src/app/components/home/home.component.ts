import { Component, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {

  @ViewChild('backgroundWrapper') backgroundWrapper;

  animationState: string;

  constructor(private location: Location, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.animationState = '';
  }

  getStartedAction(): void {
    this.animationState = 'out';
    setTimeout(() => {
      this.renderer.setStyle(this.backgroundWrapper.nativeElement, 'opacity', '0');
    }, 700);
    // this.location.replaceState('/projects');
  }
}
