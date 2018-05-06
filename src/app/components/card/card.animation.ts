import { trigger, animate, transition, style, keyframes, state } from '@angular/animations';

const maxHeightLimit = '400px';

export const CardAnimations = [
  trigger('expandCard', [
      state('void', style({
        maxHeight: '25px'
      })),

      transition(':enter', animate('0.4s ease-in-out', keyframes([
          style({
            maxHeight: '25px',
            marginTop: 0,
            opacity: 0,
            offset: 0,
          }),
          style({
            maxHeight: maxHeightLimit,
            marginTop: '30px',
            opacity: 1,
            offset: 1,
          }),
        ])
      )),

      transition(':leave', animate('0.4s ease-in-out', keyframes([
          style({
            maxHeight: maxHeightLimit,
            opacity: 1,
            offset: 0,
          }),
          style({
            maxHeight: '0',
            opacity: 0,
            offset: 1,
          }),
        ])
      )),
    ]
  )
];
