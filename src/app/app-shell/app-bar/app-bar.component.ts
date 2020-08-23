import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

@Component({
  selector: 'app-bar',
  template: `
    <div class="app-bar">
      <div class="app-bar-left">
        <img src="/assets/logoWhite.png" alt="Logo" />
        <p>{{ msg.tusClasesOnline }}</p>
      </div>
      <div class="app-bar-right">
        <mat-icon>{{ searchIcon }}</mat-icon>
        <p>{{ msg.findTutor }}</p>
        <mat-icon>{{ schoolIcon }}</mat-icon>
        <p>{{ msg.becomeTutor }}</p>
        <mat-icon>{{ userIcon }}</mat-icon>
        <p>{{ msg.signIn }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  searchIcon = 'search';
  schoolIcon = 'school';
  userIcon = 'person';

  msg = {
    findTutor: MESSAGES['appBar.findTutor'],
    becomeTutor: MESSAGES['appBar.becomeTutor'],
    signIn: MESSAGES['appBar.signIn'],
    tusClasesOnline: MESSAGES['appBar.tusClasesOnline'],
  };
}
