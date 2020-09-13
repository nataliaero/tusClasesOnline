import { Component } from '@angular/core';
import { MESSAGES } from '../../messages';

@Component({
  selector: 'app-search-tutor',
  template: `
    <div class="search-tutor">HELLO</div>
  `,
  styleUrls: ['./search-tutor.component.scss'],
})
export class SearchTutorComponent {
  constructor() {}

  msg = {
    findTutor: MESSAGES['basic.findTutor'],
    findBestTutors: MESSAGES['home.findBestTutors'],
    startToday: MESSAGES['home.startToday'],
    searchQuestion: MESSAGES['home.searchQuestion'],
    firstClassTitle: MESSAGES['home.firstClassTitle'],
    firstClassBody: MESSAGES['home.firstClass'],
  };
}
