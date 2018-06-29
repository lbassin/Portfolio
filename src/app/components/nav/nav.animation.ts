import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const NavAnimation = [
  trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', animate('0.4s cubic-bezier(.36,.55,.66,.97)', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1}),
        ])
      )),
    ]
  )
];
