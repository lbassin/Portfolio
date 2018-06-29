// import the required animation functions from the angular animations module
import { animate, state, style, transition, trigger } from '@angular/animations';

const timing = '0.7s cubic-bezier(.36,.55,.66,.97)';

export const BackgroundAnimations = [
  trigger('slideUp', [
    state('void', style({
      width: '220vw',
      height: '60vh',
      top: '0',
      left: '-120vw',
      transform: 'translateZ(1px) skewY(9deg)',
    })),

    state('out', style({
      width: '106vw',
      height: '26vh',
      top: '-13vh',
      left: '-4vw',
      transform: 'translateZ(1px) skewY(16deg)',
      boxShadow: 'none',
    })),

    transition('* => *', animate(timing)),
  ]),
  trigger('slideLeft', [
    state('void', style({
      width: '100vw',
      height: '100vh',
      top: '0',
      left: '0',
    })),

    state('out', style({
      width: '20vw',
      height: '27vh',
      top: '-35vh',
      left: '0vh',
      boxShadow: 'none',
    })),

    transition('* => *', animate(timing)),
  ]),
  trigger('slideDown', [
    state('void', style({
      left: '22vw',
      bottom: '0',
    })),

    state('out', style({
      left: '80vw',
      bottom: '-8vh',
      boxShadow: 'none',
    })),

    transition('* => *', animate(timing)),
  ])
];
