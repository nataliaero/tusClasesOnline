import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../../messages';
import { ActivatedRoute } from '@angular/router';
import { SearchTutorService } from './search-tutor.service';
import { switchMap } from 'rxjs/operators';
import { AppBarService } from '../../services';

@Component({
  selector: 'app-tutor-details',
  template: `
    <div *ngIf="tutor$ | async as tutor" class="tutor-details-header">
      <div class="tutor-details-header-content">
        <img class="tutor-details-image" [src]="tutor.img" alt="Tutor" />
        <div class="tutor-details-main">
          <h2>{{ getTutorName(tutor.name, tutor.firstSurname) }}</h2>
          <h4>{{ tutor.descriptionShort }}</h4>
        </div>
      </div>
      <div class="tutor-details-header-actions"></div>
    </div>
  `,
  styleUrls: ['./tutor-details.component.scss'],
})
export class TutorDetailsComponent implements OnInit {
  constructor(
    private appBarService: AppBarService,
    private route: ActivatedRoute,
    private searchTutorService: SearchTutorService,
  ) {}

  tutor$ = this.route.paramMap.pipe(
    switchMap(params => this.searchTutorService.getTutor(params.get('id'))),
  );

  msg = {
    findIdealTutor: MESSAGES['searchTutor.findIdealTutor'],
    filtersTip: MESSAGES['searchTutor.filtersTip'],
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

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }
}
