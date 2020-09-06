import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

@Component({
  selector: 'app-steps',
  template: `
    <div class="map">
      <app-avatar class="map-avatar" [icon]="stepIcon"></app-avatar>
      <div class="map-title">{{ msg.title }}</div>
      <div class="map-info">
        <app-avatar class="info-avatar" [message]="'1'"></app-avatar>
        <h3>{{ msg.step1 }}</h3>
      </div>
    </div>
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
