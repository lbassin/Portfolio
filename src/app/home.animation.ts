// import the required animation functions from the angular animations module
import {trigger, animate, transition, style, keyframes, state} from '@angular/animations';

export const HomeAnimations = [
  trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),

      state('out', style({
        opacity: 0
      })),

      transition(':enter', animate('0.6s 400ms ease-out', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1}),
        ])
      )),
      transition('* => out', animate('1.2s')),
    ]
  ),
  trigger('slideUp', [
    state('void', style({})),

    state('out', style({
      top: '-100vh'
    })),

    transition('* => out', animate('1.2s')),
  ]),
  trigger('slideLeft', [
    state('void', style({})),

    state('out', style({
      top: '-100vh',
      left: '-100vh'
    })),

    transition('* => out', animate('1.2s')),
  ]),
  trigger('slideDown', [
    state('void', style({})),

    state('out', style({
      bottom: '-100vh'
    })),

    transition('* => out', animate('1.2s')),
  ])
];
