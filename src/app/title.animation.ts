// import the required animation functions from the angular animations module
import {trigger, animate, transition, style, keyframes, state} from '@angular/animations';

export const NavAnimation = [
  trigger('headerAnimation', [
      state('*', style({
        top: '50%',
        left: '50%',
      })),

      state('moveTitle', style({
        top: '1%',
        left: '15%',
        transform: 'translateX(0)',
        textAlign: 'left',
        fontSize: '2.5em',
        width: '70%'
      })),

      transition(':enter', animate('0.4s 400ms', keyframes([
        style({
          opacity: 0,
          offset: 0,
        }),
        style({
          opacity: 1,
          offset: 1,
        }),
      ]))),

      transition('* => moveTitle', animate('0.4s 400ms')),
    ]
  ),
  trigger('headerWrapperAnimation', [
    state('*', style({
    })),

    state('moveBackground', style({
      height: '20vh',
    })),

    transition('* => moveBackground', animate('0.4s 600ms')),
  ])
];
