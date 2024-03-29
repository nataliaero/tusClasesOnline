import { Component, EventEmitter, Output } from '@angular/core';

import { MESSAGES } from '../../../messages';
import { MobileService } from '../../../services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tutor-card-actions',
  template: `
    <div class="tutor-card-right-actions">
      <app-button
        class="tutor-card-book-class-button"
        [icon]="bookClassIcon"
        [fontSize]="buttonFontSize"
        [iconSize]="buttonIconSize"
        [message]="bookClassMessage$ | async"
        (click)="bookClass.emit()"
      ></app-button>
      <app-button
        class="tutor-card-send-msg-button"
        [color]="sendMsgColor"
        [icon]="sendMsgIcon"
        [fontSize]="buttonFontSize"
        [iconSize]="buttonIconSize"
        [message]="sendMessage$ | async"
        (click)="sendMessage.emit()"
      ></app-button>
    </div>
  `,
  styleUrls: ['./tutor-card.component-actions.scss'],
})
export class TutorCardActionsComponent {
  constructor(private mobileService: MobileService) {}
  @Output() bookClass = new EventEmitter<void>();
  @Output() sendMessage = new EventEmitter<void>();

  bookClassIcon = 'event_available';
  sendMsgIcon = 'mail';
  buttonFontSize = '14px';
  buttonIconSize = '16px';
  sendMsgColor = '#3bb3bd';

  msg = {
    bookAClass: MESSAGES['button.bookAClass'],
    sendMessage: MESSAGES['button.sendMessage'],
  };

  private isMobileOrTablet$: Observable<boolean> = this.mobileService.isMobileOrTablet$;

  bookClassMessage$ = this.isMobileOrTablet$.pipe(map(el => this.msg.bookAClass));
  sendMessage$ = this.isMobileOrTablet$.pipe(map(el => this.msg.sendMessage));
}
