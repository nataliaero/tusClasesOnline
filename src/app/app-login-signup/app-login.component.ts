import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MESSAGES } from '../../messages';

@Component({
  selector: 'app-login-signup',
  template: `
    <app-dialog [title]="msg.title">
      <div class="content">
        <button mat-raised-button class="facebook-button" tabIndex="-1">
          <img class="facebook-image" src="/assets/facebookLogo.png" alt="Facebook Logo" />
          {{ msg.enterWithFacebook }}
        </button>
        <button mat-raised-button class="google-button" tabIndex="-1">
          <img class="google-image" src="/assets/googleLogo.jpg" alt="Google Logo" />
          {{ msg.enterWithFacebook }}
        </button>
        <div class="separator">
          <span>{{ msg.initializeSession }}</span>
        </div>
      </div>
      <app-login-form></app-login-form>
    </app-dialog>
  `,
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoginComponent {
  msg = {
    title: MESSAGES['login.enterCursosOnline'],
    enterWithFacebook: MESSAGES['login.enterWithFacebook'],
    enterWithGoogle: MESSAGES['login.enterWithGoogle'],
    initializeSession: MESSAGES['login.initializeSession'],
    enter: MESSAGES['login.enter'],
    email: MESSAGES['basic.email'],
    password: MESSAGES['basic.password'],
    rememberMe: MESSAGES['basic.rememberMe'],
    forgetPassword: MESSAGES['basic.forgetPassword'],
    notRobot: MESSAGES['basic.notRobot'],
    notRegisterYet: MESSAGES['login.notRegisterYet'],
  };
}
