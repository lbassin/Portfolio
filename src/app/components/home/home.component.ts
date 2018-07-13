import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeAnimations } from './home.animation';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { BackgroundService } from '../../services/background.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: HomeAnimations,
})
export class HomeComponent implements OnInit {

  @ViewChild('backgroundWrapper') backgroundWrapper: ElementRef;
  @ViewChild('appProjects') appProject: ProjectsComponent;

  animationState: string;
  schema: any;

  constructor(private location: Location, private backgroundService: BackgroundService, private router: Router, private meta: Meta) {
  }

  ngOnInit(): void {
    this.backgroundService.closeBackground();
    this.animationState = '';

    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'France',
        'addressLocality': 'Paris'
      },
      'email': 'mailto:laurent@bassin.info',
      'image': 'https://laurentbassin.fr/assets/laurentbassin.svg',
      'jobTitle': 'Développeur Web Back-End',
      'name': 'Laurent Bassin',
      'url': 'https://laurentbassin.fr/'
    };

    this.meta.updateTag({
      name: 'description',
      content: 'Hello ! Je m\'appelle Laurent et je suis un jeune développeur web full-stack de 22 ans passionné par la programmation ' +
      'et les nouvelles technologies. J\'aime découvrir et apprendre de nouvelles choses au quotidien mais aussi passer du temps pour ' +
      'apporter des solutions à des problèmes rencontrés.'
    });
  }

  getStartedAction(): void {
    this.animationState = 'out';
    this.backgroundService.openBackground();

    setTimeout(() => {
      this.router.navigate(['/projects']);
    }, 350);

  }
}
