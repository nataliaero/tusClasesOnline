import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

@Component({
  selector: 'app-steps',
  template: `
    <app-section [title]="msg.title" [icon]="stepIcon">
      <div class="step-info">
        <div class="step-first">
          <app-avatar [message]="'1'"></app-avatar>
          <h3 class="step-message">{{ msg.step1 }}</h3>
        </div>
        <div class="step-second">
          <app-avatar [message]="'2'"></app-avatar>
          <h3 class="step-message">{{ msg.step2 }}</h3>
        </div>
        <div class="step-third">
          <app-avatar [message]="'3'"></app-avatar>
          <h3 class="step-message">{{ msg.step3 }}</h3>
        </div>
      </div>
    </app-section>
  `,
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  msg = {
    title: MESSAGES['steps.title'],
    step1: MESSAGES['steps.step1'],
    step2: MESSAGES['steps.step2'],
    step3: MESSAGES['steps.step3'],
  };

  stepIcon = 'explore';
}
