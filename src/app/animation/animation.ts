import { trigger, transition, style, animate } from '@angular/animations';

export const QuickUp = trigger('QuickUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const SlowUp = trigger('SlowUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '500ms 250ms ease-in',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
]);
