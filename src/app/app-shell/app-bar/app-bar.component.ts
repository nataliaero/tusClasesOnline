import { Component, HostListener } from '@angular/core';
import { MESSAGES } from '../../../messages';
import { AppLoginService, AppSignupService } from '../../app-login-signup';
import { map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { AppBarService, MobileService, NavigationService } from '../../../services';

@Component({
  selector: 'app-bar',
  template: `
    <div [class]="getAppBarClass()">
      <div class="app-bar-left" (click)="onClickHome()">
        <img src="/assets/logoWhite.png" alt="Logo" />
        <p>{{ msg.tusClasesOnline }}</p>
      </div>
      <div class="app-bar-right">
        <app-button
          (click)="onClickFindTutor()"
          [message]="findMessage$ | async"
          [icon]="searchIcon"
        ></app-button>
        <app-button
          [message]="tutorMessage$ | async"
          [icon]="schoolIcon"
          (click)="onClickTutor()"
        ></app-button>
        <app-button
          [message]="userMessage$ | async"
          [icon]="userIcon"
          (click)="onClickUser()"
        ></app-button>
      </div>
    </div>
  `,
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  constructor(
    private appBarService: AppBarService,
    private appLoginService: AppLoginService,
    private appSignupService: AppSignupService,
    private mobileService: MobileService,
    private navigationService: NavigationService,
  ) {}

  msg = {
    findTutor: MESSAGES['basic.findTutor'],
    becomeTutor: MESSAGES['appBar.becomeTutor'],
    signIn: MESSAGES['appBar.signIn'],
    tusClasesOnline: MESSAGES['appBar.tusClasesOnline'],
    registerTutor: MESSAGES['signup.registerTutor'],
  };

  private scroll = false;
  private isMobileOrTablet$: Observable<boolean> = this.mobileService.isMobileOrTablet$;

  searchIcon = 'search';
  schoolIcon = 'school';
  userIcon = 'person';

  findMessage$ = this.isMobileOrTablet$.pipe(map(el => (el ? null : this.msg.findTutor)));
  tutorMessage$ = this.isMobileOrTablet$.pipe(map(el => (el ? null : this.msg.becomeTutor)));
  userMessage$ = this.isMobileOrTablet$.pipe(map(el => (el ? null : this.msg.signIn)));

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event): void {
    const sc = $event.target.scrollingElement.scrollTop;
    this.scroll = sc >= 10;
  }

  getAppBarClass(): string {
    return this.scroll || this.appBarService.getStyle() ? 'app-bar scroll-color' : 'app-bar';
  }

  onClickHome(): void {
    this.navigationService.goToHome();
  }

  onClickUser(): Subscription {
    return this.appLoginService.openLoginDialog().pipe(take(1)).subscribe();
  }

  onClickTutor(): Subscription {
    return this.appSignupService.openSignupDialog(this.msg.registerTutor).pipe(take(1)).subscribe();
  }

  onClickFindTutor(): void {
    this.navigationService.goToSearchTutor();
  }
}
