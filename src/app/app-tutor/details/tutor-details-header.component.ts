import { Component, Input } from '@angular/core';
import { MESSAGES } from '../../../messages';
import { Tutor } from '../types';

@Component({
  selector: 'app-tutor-details-header',
  template: `
    <ng-container *ngIf="tutor">
      <div class="tutor-details-header-content">
        <div class="tutor-details-header-left">
          <img class="tutor-details-image" [src]="tutor.img" alt="Tutor" />
          <div class="tutor-details-header-main">
            <div class="tutor-details-title">
              <h2 class="tutor-details-name">{{ getTutorName(tutor.name, tutor.firstSurname) }}</h2>
              <div class="tutor-details-rate">
                <mat-icon>{{ rateIcon }}</mat-icon>
                <h3>{{ tutor.rate }}</h3>
              </div>
            </div>
            <h2 class="tutor-details-short-description">{{ tutor.descriptionShort }}</h2>
            <div class="tutor-details-header-item">
              <mat-icon>{{ ratingsIcon }}</mat-icon>
              <h3>{{ tutor.classCount }} {{ msg.numberClasses }}</h3>
            </div>
            <div class="tutor-details-header-item">
              <h3>{{ tutor.ratingsCount }} {{ msg.ratings }}</h3>
            </div>
            <div class="tutor-details-header-item">
              <h3>{{ tutor.fee }} {{ RATE_HOUR }}</h3>
            </div>
          </div>
        </div>
        <video
          class="tutor-details-video"
          height="200"
          controls
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source [src]="tutor.video" type="video/mp4" />
          {{ msg.videoNotSupported }}
        </video>
      </div>
      <div class="tutor-details-header-actions">
        <app-button
          [icon]="bookClassIcon"
          [fontSize]="buttonFontSize"
          [iconSize]="buttonIconSize"
          [message]="msg.bookAClass"
        ></app-button>
        <app-button
          [color]="sendMsgColor"
          [icon]="sendMsgIcon"
          [fontSize]="buttonFontSize"
          [iconSize]="buttonIconSize"
          [message]="msg.sendMessage"
        ></app-button>
        <app-button
          [color]="sendMsgColor"
          [icon]="favoriteIcon"
          [fontSize]="buttonFontSize"
          [iconSize]="buttonIconSize"
          [message]="msg.addFavorites"
        ></app-button>
      </div>
    </ng-container>
  `,
  styleUrls: ['./tutor-details-header.component.scss'],
})
export class TutorDetailsComponentHeader {
  @Input() tutor: Tutor;

  rateIcon = 'star';
  ratingsIcon = 'equalizer';
  RATE_HOUR = '€/h';

  bookClassIcon = 'event_available';
  sendMsgIcon = 'mail';
  favoriteIcon = 'favorite_border';
  buttonFontSize = '14px';
  buttonIconSize = '16px';
  sendMsgColor = '#3bb3bd';

  msg = {
    bookAClass: MESSAGES['button.bookAClass'],
    sendMessage: MESSAGES['button.sendMessage'],
    addFavorites: MESSAGES['button.addFavorites'],
    numberClasses: MESSAGES['tutorDetails.numberClasses'],
    ratings: MESSAGES['tutor.ratings'],
    videoNotSupported: MESSAGES['basic.videoNotSupported'],
  };

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }
}
