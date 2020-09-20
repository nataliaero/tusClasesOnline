import { Component, OnInit } from '@angular/core';
import { AppBarService } from 'src/services';
import { MESSAGES } from '../../messages';
import { TUTORS } from './tutors';

@Component({
  selector: 'app-search-tutor',
  template: `
    <div class="search-tutor">
      <div class="search-tutor-title">
        <h2>{{ msg.findIdealTutor }} -</h2>
        <h2 class="search-tutor-title-right">{{ msg.filtersTip }}</h2>
      </div>
      <div class="search-tutor-body">
        <div class="search-tutor-cards">
          <app-tutor-card *ngFor="let tutor of tutors" [tutor]="tutor"></app-tutor-card>
        </div>
        <div class="search-tutor-filters">
          <h4>{{ msg.whatToLearn }}</h4>
          <h4>{{ msg.lookKeyWord }}</h4>
        </div>
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
    bookAClass: MESSAGES['searchTutor.bookAClass'],
    sendMessage: MESSAGES['searchTutor.sendMessage'],
    readMore: MESSAGES['searchTutor.readMore'],
    fee: MESSAGES['searchTutor.fee'],
    ratings: MESSAGES['searchTutor.ratings'],
    whatToLearn: MESSAGES['searchTutor.whatToLearn'],
    lookKeyWord: MESSAGES['searchTutor.lookKeyWord'],
    lookKeyWordPlaceholder: MESSAGES['searchTutor.lookKeyWordPlaceholder'],
    priceRange: MESSAGES['searchTutor.priceRange'],
    availability: MESSAGES['searchTutor.availability'],
    weekends: MESSAGES['searchTutor.weekends'],
    speaks: MESSAGES['searchTutor.speaks'],
    sortBy: MESSAGES['searchTutor.sortBy'],
  };

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }
}
