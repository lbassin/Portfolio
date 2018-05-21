import { trigger, animate, transition, style, keyframes, state } from '@angular/animations';

export const ProjectsAnimations = [
  trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),

      transition('void => show', animate('0.6s ease-in-out', keyframes([
          style({
            marginTop: '30px',
            opacity: 0,
            offset: 0,
          }),
          style({
            marginTop: '0px',
            opacity: 1,
            offset: 1,
          }),
        ])
      )),
    ]
  )
];
