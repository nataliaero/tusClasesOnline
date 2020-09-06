import { Component } from '@angular/core';
import { MESSAGES } from '../../messages';

@Component({
  selector: 'app-subjects',
  template: `
    <div class="subjects">
      <div class="subject">
        <mat-icon>{{ mathematicsIcon }}</mat-icon>
        <h2>{{ msg.mathematics }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ physicsIcon }}</mat-icon>
        <h2>{{ msg.physics }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ languageIcon }}</mat-icon>
        <h2>{{ msg.language }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ informaticsIcon }}</mat-icon>
        <h2>{{ msg.informatics }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ economyIcon }}</mat-icon>
        <h2>{{ msg.economy }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ frenchIcon }}</mat-icon>
        <h2>{{ msg.french }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ englishIcon }}</mat-icon>
        <h2>{{ msg.english }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ algebraIcon }}</mat-icon>
        <h2>{{ msg.algebra }}</h2>
      </div>
      <div class="subject">
        <mat-icon>{{ chemistryIcon }}</mat-icon>
        <h2>{{ msg.chemistry }}</h2>
      </div>
    </div>
  `,
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
  msg = {
    mathematics: MESSAGES['subjects.mathematics'],
    physics: MESSAGES['subjects.physics'],
    language: MESSAGES['subjects.language'],
    informatics: MESSAGES['subjects.informatics'],
    economy: MESSAGES['subjects.economy'],
    french: MESSAGES['subjects.french'],
    english: MESSAGES['subjects.english'],
    algebra: MESSAGES['subjects.algebra'],
    chemistry: MESSAGES['subjects.chemistry'],
  };
  chemistryIcon = 'exposure';
  algebraIcon = 'school';
  englishIcon = 'publicon';
  frenchIcon = 'spa';
  economyIcon = 'attach_money';
  informaticsIcon = 'laptop';
  languageIcon = 'create';
  physicsIcon = 'filter_vintage';
  mathematicsIcon = 'blur_on';
}
