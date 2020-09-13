import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../../../messages';
import { AppLoginService, AppSignupService } from '../../app-login-signup';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar',
  template: `
    <div [class]="getAppBarClass()">
      <div class="app-bar-left">
        <img src="/assets/logoWhite.png" alt="Logo" />
        <p>{{ msg.tusClasesOnline }}</p>
      </div>
      <div class="app-bar-right">
        <app-button [message]="msg.findTutor" [icon]="searchIcon"></app-button>
        <app-button
          [message]="msg.becomeTutor"
          [icon]="schoolIcon"
          (click)="onClickTutor()"
        ></app-button>
        <app-button [message]="msg.signIn" [icon]="userIcon" (click)="onClickUser()"></app-button>
      </div>
    </div>
  `,
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  constructor(
    private appLoginService: AppLoginService,
    private appSignupService: AppSignupService,
  ) {}
  searchIcon = 'search';
  schoolIcon = 'school';
  userIcon = 'person';

  msg = {
    findTutor: MESSAGES['basic.findTutor'],
    becomeTutor: MESSAGES['appBar.becomeTutor'],
    signIn: MESSAGES['appBar.signIn'],
    tusClasesOnline: MESSAGES['appBar.tusClasesOnline'],
    registerTutor: MESSAGES['signup.registerTutor'],
  };

  scroll = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true);
  }

  scrolling = s => {
    const sc = s.target.scrollingElement.scrollTop;
    this.scroll = sc >= 10;
  };

  getAppBarClass(): string {
    return this.scroll ? 'app-bar scroll-color' : 'app-bar';
  }

  onClickUser(): Subscription {
    return this.appLoginService.openLoginDialog().pipe(take(1)).subscribe();
  }

  onClickTutor(): Subscription {
    return this.appSignupService.openSignupDialog(this.msg.registerTutor).pipe(take(1)).subscribe();
  }
}
