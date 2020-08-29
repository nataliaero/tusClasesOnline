import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';
import { AppLoginSignUpService } from '../../app-login-signup';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar',
  template: `
    <div class="app-bar">
      <div class="app-bar-left">
        <img src="/assets/logoWhite.png" alt="Logo" />
        <p>{{ msg.tusClasesOnline }}</p>
      </div>
      <div class="app-bar-right">
        <app-button [message]="msg.findTutor" [icon]="searchIcon"></app-button>
        <app-button [message]="msg.becomeTutor" [icon]="schoolIcon"></app-button>
        <app-button [message]="msg.signIn" [icon]="userIcon" (click)="onClickUser()"></app-button>
      </div>
    </div>
  `,
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  constructor(private appLoginSignUpService: AppLoginSignUpService) {}
  searchIcon = 'search';
  schoolIcon = 'school';
  userIcon = 'person';

  msg = {
    findTutor: MESSAGES['basic.findTutor'],
    becomeTutor: MESSAGES['appBar.becomeTutor'],
    signIn: MESSAGES['appBar.signIn'],
    tusClasesOnline: MESSAGES['appBar.tusClasesOnline'],
  };

  onClickUser(): Subscription {
    return this.appLoginSignUpService.openDialog().pipe(take(1)).subscribe();
  }
}
