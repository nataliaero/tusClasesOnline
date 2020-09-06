import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

interface SubjectConfig {
  icon: string;
  message: string;
}

@Component({
  selector: 'app-subjects',
  template: `
    <div class="subjects">
      <div *ngFor="let subject of subjects" class="subject">
        <mat-icon>{{ subject.icon }}</mat-icon>
        <h2>{{ subject.message }}</h2>
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

  subjects: SubjectConfig[] = [
    { icon: 'blur_on', message: this.msg.mathematics },
    { icon: 'filter_vintage', message: this.msg.physics },
    { icon: 'create', message: this.msg.language },
    { icon: 'laptop', message: this.msg.informatics },
    { icon: 'attach_money', message: this.msg.economy },
    { icon: 'spa', message: this.msg.french },
    { icon: 'publicon', message: this.msg.english },
    { icon: 'school', message: this.msg.algebra },
    { icon: 'exposure', message: this.msg.chemistry },
  ];
}
