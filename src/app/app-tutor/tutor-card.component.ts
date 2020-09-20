import { Component, Input } from '@angular/core';
import { MESSAGES } from '../../messages';
import { Tutor } from './types';

const MAX_LENGTH_DESCRIPTION = 150;

@Component({
  selector: 'app-tutor-card',
  template: `
    <div class="tutor-card">
      <div class="tutor-card-left">
        <img class="tutor-card-image" [src]="tutor.img" alt="Tutor" />
      </div>

      <div class="tutor-card-middle">
        <div class="tutor-card-name">
          <h2>{{ getTutorName(tutor.name, tutor.firstSurname) }}</h2>
          <p class="tutor-card-country">({{ tutor.country }})</p>
        </div>
        <h4>{{ tutor.descriptionShort }}</h4>
        <p class="tutor-card-long">{{ getTutorLongDescription(tutor.descriptionLong) }}</p>
        <p class="tutor-card-read-more">{{ msg.readMore }}</p>
      </div>

      <div class="tutor-card-right">
        <div class="tutor-card-right-info">
          <div class="tutor-card-fee-rate-info">
            <h3 class="tutor-card-fee">{{ tutor.fee }} {{ RATE_HOUR }}</h3>
            <mat-icon class="tutor-card-rate-icon">{{ rateIcon }}</mat-icon>
            <h3>{{ tutor.rate }}</h3>
          </div>
          <p>{{ tutor.comments.length }} {{ msg.ratings }}</p>
        </div>

        <div class="tutor-card-right-actions">
          <app-button
            class="tutor-card-book-class-button"
            [icon]="bookClassIcon"
            [fontSize]="buttonFontSize"
            [iconSize]="buttonIconSize"
            [message]="msg.bookAClass"
          ></app-button>
          <app-button
            class="tutor-card-send-msg-button"
            [color]="sendMsgColor"
            [icon]="sendMsgIcon"
            [fontSize]="buttonFontSize"
            [iconSize]="buttonIconSize"
            [message]="msg.sendMessage"
          ></app-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tutor-card.component.scss'],
})
export class TutorCardComponent {
  @Input() tutor: Tutor;

  RATE_HOUR = 'EUR/h';
  rateIcon = 'star';
  bookClassIcon = 'event_available';
  sendMsgIcon = 'mail';
  buttonFontSize = '14px';
  buttonIconSize = '16px';
  sendMsgColor = '#3bb3bd';

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

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }

  getTutorLongDescription(longDescription: string): string {
    if (longDescription.length <= MAX_LENGTH_DESCRIPTION) {
      return longDescription;
    }
    return `${longDescription.substr(0, MAX_LENGTH_DESCRIPTION)}...`;
  }
}
