import { Component, OnInit } from '@angular/core';
import { AppBarService } from 'src/services';
import { MESSAGES } from '../../messages';
import { TUTORS } from './tutors';

@Component({
  selector: 'app-search-tutor',
  template: `
    <div class="search-tutor">
      <div class="search-tutor-title">
        <h2>{{ msg.findIdealTutor }}</h2>
        <h2 class="search-tutor-title-middle">-</h2>
        <h2 class="search-tutor-title-right">{{ msg.filtersTip }}</h2>
      </div>
      <div class="search-tutor-body">
        <div class="search-tutor-cards">
          <app-tutor-card *ngFor="let tutor of tutors" [tutor]="tutor"></app-tutor-card>
        </div>
        <app-tutor-filters></app-tutor-filters>
      </div>
    </div>
  `,
  styleUrls: ['./search-tutor.component.scss'],
})
export class SearchTutorComponent implements OnInit {
  constructor(private appBarService: AppBarService) {}

  tutors = TUTORS;

  msg = {
    findIdealTutor: MESSAGES['searchTutor.findIdealTutor'],
    filtersTip: MESSAGES['searchTutor.filtersTip'],
  };

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }
}
