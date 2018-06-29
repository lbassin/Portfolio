// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, keyframes, state } from '@angular/animations';

const timing = '0.5s cubic-bezier(.36,.55,.66,.97)';

export const HomeAnimations = [
  trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),

      state('out', style({
        opacity: 0,
        display: 'none',
      })),

      transition(':enter', animate('0.6s 400ms ease-out', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1}),
        ])
      )),
      transition('* => out', animate(timing)),
    ]
  ),
];
