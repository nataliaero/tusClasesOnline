import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

interface TutorInfoConfig {
  icon: string;
  message: string;
}

@Component({
  selector: 'app-tutor-info',
  template: `
    <app-section [title]="msg.title" [subtitle]="msg.subtitle" [icon]="tutorInfoIcon">
      <div class="tutor-info">
        <div class="tutor-info-body">
          <div *ngFor="let tutorInfo of tutorInfoConfig">
            <mat-icon class="tutor-icon">{{ tutorInfo.icon }}</mat-icon>
            <h3>{{ tutorInfo.message }}</h3>
          </div>
        </div>
        <img class="tutor-image" src="/assets/tutor-info.jpg" alt="Tutor" />
      </div>
      <h2 class="tutor-start-message">{{ msg.start }}</h2>
      <button mat-button class="tutor-button" (click)="onClick()">
        {{ msg.register }}
      </button>
    </app-section>
  `,
  styleUrls: ['./tutor-info.component.scss'],
})
export class TutorInfoComponent {
  msg = {
    title: MESSAGES['tutorInfo.title'],
    subtitle: MESSAGES['tutorInfo.subtitle'],
    findStudents: MESSAGES['tutorInfo.findStudents'],
    flexibleTime: MESSAGES['tutorInfo.flexibleTime'],
    earnMoney: MESSAGES['tutorInfo.earnMoney'],
    start: MESSAGES['tutorInfo.start'],
    register: MESSAGES['tutorInfo.register'],
  };

  tutorInfoConfig: TutorInfoConfig[] = [
    { icon: 'search', message: this.msg.findStudents },
    { icon: 'alarm', message: this.msg.flexibleTime },
    { icon: 'euro_symbol', message: this.msg.earnMoney },
  ];

  tutorInfoIcon = 'school';

  onClick(): void {
    console.log('click');
  }
}
