import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MESSAGES } from '../../messages';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SignupDialogData {
  title: string;
}

@Component({
  selector: 'app-signup',
  template: `
    <app-dialog [title]="data.title">
      <div class="content">
        <div class="login-button facebook-button" tabIndex="-1">
          <img class="image-button" src="/assets/facebookLogo.png" alt="Facebook Logo" />
          {{ msg.enterWithFacebook }}
        </div>
        <div mat-raised-button class="login-button google-button" tabIndex="-1">
          <img class="image-button" src="/assets/googleLogo.png" alt="Google Logo" />
          {{ msg.enterWithGoogle }}
        </div>
        <div class="separator">
          <span>{{ msg.registerEmail }}</span>
        </div>
      </div>
      <app-signup-form></app-signup-form>
    </app-dialog>
  `,
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSignupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SignupDialogData) {}

  msg = {
    enterWithFacebook: MESSAGES['signup.enterWithFacebook'],
    enterWithGoogle: MESSAGES['signup.enterWithGoogle'],
    registerEmail: MESSAGES['signup.registerEmail'],
    enter: MESSAGES['login.enter'],
  };
}
