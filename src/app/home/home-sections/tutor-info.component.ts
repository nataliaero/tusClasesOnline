import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

@Component({
  selector: 'app-tutor-info',
  template: `
    <app-section [title]="msg.title" [subtitle]="msg.subtitle" [icon]="tutorInfoIcon"></app-section>
  `,
  styleUrls: ['./tutor-info.component.scss'],
})
export class TutorInfoComponent {
  msg = {
    title: MESSAGES['tutorInfo.title'],
    subtitle: MESSAGES['tutorInfo.subtitle'],
  };

  tutorInfoIcon = 'school';
}
