import { Component } from '@angular/core';
import { MESSAGES } from '../../messages';

@Component({
  selector: 'app-home',
  template: `
    <div class="background-image">
      <div class="main-info">
        <h1 class="title">{{ msg.findBestTutors }}</h1>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  msg = {
    findBestTutors: MESSAGES['home.findBestTutors'],
  };
}
