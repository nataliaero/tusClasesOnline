import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MESSAGES } from '../../../messages';
import { MobileService } from '../../../services';
import { Observable } from 'rxjs';
import { Tutor } from '../types';

@Component({
  selector: 'app-tutor-details-header',
  template: `
    <ng-container *ngIf="tutor">
      <div class="tutor-details-header">
        <div class="tutor-details-header-left "><img [src]="tutor.img" alt="Tutor" /></div>
        <div class="tutor-details-header-right">
          <div class="tutor-details-header-title">
            <h2 class="tutor-details-header-name">
              {{ getTutorName(tutor.name, tutor.firstSurname) }}
            </h2>
            <div class="tutor-details-header-actions">
              <mat-icon class="tutor-details-header-star">{{ rateIcon }}</mat-icon>
              <h2>{{ tutor.rate }}</h2>
              <mat-icon [class]="getFavoriteStyle()" (click)="onClickFavorite()">
                {{ getFavoriteIcon() }}
              </mat-icon>
              <mat-icon class="tutor-details-header-message">{{ sendMsgIcon }}</mat-icon>
            </div>
          </div>
          <h2 class="tutor-details-short-description">{{ tutor.descriptionShort }}</h2>
          <div class="tutor-details-header-item">
            <mat-icon *ngIf="(isMobile$ | async) === false">{{ ratingsIcon }}</mat-icon>
            <h3>{{ tutor.classCount }} {{ msg.numberClasses }}</h3>
          </div>
          <div class="tutor-details-header-item">
            <h3>{{ tutor.ratingsCount }} {{ msg.ratings }}</h3>
          </div>
          <div class="tutor-details-header-item">
            <h3>{{ tutor.fee }} {{ RATE_HOUR }}</h3>
          </div>
          <div class="tutor-details-send-message">
            <app-button
              [icon]="bookClassIcon"
              [fontSize]="buttonFontSize"
              [iconSize]="buttonIconSize"
              [message]="msg.bookAClass"
            ></app-button>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./tutor-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorDetailsHeaderComponent {
  constructor(private mobileService: MobileService) {}

  @Input() tutor: Tutor;

  rateIcon = 'star';
  ratingsIcon = 'equalizer';
  RATE_HOUR = '€/h';

  favorite = false;

  bookClassIcon = 'event_available';
  sendMsgIcon = 'mail_outline';
  buttonFontSize = '16px';
  buttonIconSize = '18px';
  sendMsgColor = '#3bb3bd';

  msg = {
    bookAClass: MESSAGES['button.bookAClass'],
    sendMessage: MESSAGES['button.sendMessage'],
    addFavorites: MESSAGES['button.addFavorites'],
    numberClasses: MESSAGES['tutor.numberClasses'],
    ratings: MESSAGES['tutor.ratings'],
    videoNotSupported: MESSAGES['basic.videoNotSupported'],
  };

  isMobile$: Observable<boolean> = this.mobileService.isMobile$;

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }

  getFavoriteIcon(): string {
    return this.favorite ? 'favorite' : 'favorite_border';
  }

  getFavoriteStyle(): string {
    return this.favorite ? 'tutor-details-favorite-filled' : 'tutor-details-favorite';
  }

  onClickFavorite(): void {
    this.favorite = !this.favorite;
    // TBD save favorite for the student
  }
}
