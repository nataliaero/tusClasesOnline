import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MESSAGES } from '../../../messages';
import { Tutor } from '../types';
import { MobileService, NavigationService } from '../../../services';

const MAX_LENGTH_DESCRIPTION = 150;

@Component({
  selector: 'app-tutor-card',
  template: `
    <div class="tutor-main">
      <div class="tutor-card-left">
        <img
          class="tutor-card-image"
          (click)="onClickCard(tutor.id)"
          [src]="tutor.img"
          alt="Tutor"
        />
      </div>

      <div class="tutor-card-info">
        <div class="tutor-card-middle">
          <div class="tutor-card-name">
            <h2>{{ getTutorName(tutor.name, tutor.firstSurname) }}</h2>
            <p class="tutor-card-country">({{ tutor.country }})</p>
          </div>
          <h4>{{ tutor.descriptionShort }}</h4>
          <p class="tutor-card-long">{{ getTutorLongDescription(tutor.descriptionLong) }}</p>
          <p class="tutor-card-read-more" (click)="onClickCard(tutor.id)">{{ msg.readMore }}</p>
        </div>

        <div class="tutor-card-right">
          <div class="tutor-card-right-info">
            <div class="tutor-card-fee-rate-info">
              <h3 class="tutor-card-fee">{{ tutor.fee }} {{ RATE_HOUR }}</h3>
              <div class="tutor-card-rate">
                <mat-icon class="tutor-card-rate-icon">{{ rateIcon }}</mat-icon>
                <h3>{{ tutor.rate }}</h3>
              </div>
            </div>
            <p>{{ tutor.comments.length }} {{ msg.ratings }}</p>
          </div>

          <app-tutor-card-actions
            *ngIf="(isMobileOrTablet$ | async) === false"
          ></app-tutor-card-actions>
        </div>
      </div>
    </div>
    <app-tutor-card-actions
      class="tutor-card-actions"
      *ngIf="isMobileOrTablet$ | async"
    ></app-tutor-card-actions>
  `,
  styleUrls: ['./tutor-card.component.scss'],
})
export class TutorCardComponent {
  constructor(private mobileService: MobileService, private navigationService: NavigationService) {}
  @Input() tutor: Tutor;

  RATE_HOUR = 'EUR/h';
  rateIcon = 'star';

  msg = {
    findIdealTutor: MESSAGES['searchTutor.findIdealTutor'],
    filtersTip: MESSAGES['searchTutor.filtersTip'],
    readMore: MESSAGES['searchTutor.readMore'],
    fee: MESSAGES['searchTutor.fee'],
    ratings: MESSAGES['tutor.ratings'],
    whatToLearn: MESSAGES['searchTutor.whatToLearn'],
    lookKeyWord: MESSAGES['searchTutor.lookKeyWord'],
    lookKeyWordPlaceholder: MESSAGES['searchTutor.lookKeyWordPlaceholder'],
    priceRange: MESSAGES['searchTutor.priceRange'],
    availability: MESSAGES['searchTutor.availability'],
    weekends: MESSAGES['searchTutor.weekends'],
    speaks: MESSAGES['searchTutor.speaks'],
    sortBy: MESSAGES['searchTutor.sortBy'],
  };

  isMobileOrTablet$: Observable<boolean> = this.mobileService.isMobileOrTablet$;

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }

  getTutorLongDescription(longDescription: string): string {
    if (longDescription.length <= MAX_LENGTH_DESCRIPTION) {
      return longDescription;
    }
    return `${longDescription.substr(0, MAX_LENGTH_DESCRIPTION)}...`;
  }

  onClickCard(id: string): void {
    this.navigationService.goToTutorDetails(id);
  }
}
