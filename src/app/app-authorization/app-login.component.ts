import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppSignupService } from './app-signup.service';
import { MESSAGES } from '../../messages';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterType } from './types';
import { Session } from '../session';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  template: `
    <app-dialog [title]="msg.title">
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
          <span>{{ msg.initializeSession }}</span>
        </div>
      </div>
      <app-login-form (register)="onRegister($event)" (login)="onLogin($event)"></app-login-form>
    </app-dialog>
  `,
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoginComponent {
  constructor(
    private appSignupService: AppSignupService,
    public dialogRef: MatDialogRef<AppLoginComponent>,
  ) {}

  msg = {
    title: MESSAGES['login.enterCursosOnline'],
    enterWithFacebook: MESSAGES['login.enterWithFacebook'],
    enterWithGoogle: MESSAGES['login.enterWithGoogle'],
    initializeSession: MESSAGES['login.initializeSession'],
    registerStudent: MESSAGES['signup.registerStudent'],
    registerTutor: MESSAGES['signup.registerTutor'],
  };

  onRegister(registerType: RegisterType): void {
    const title =
      registerType === RegisterType.Tutor ? this.msg.registerTutor : this.msg.registerStudent;
    this.appSignupService.openSignupDialog(title).pipe(take(1)).subscribe();
    this.dialogRef.close();
  }

  onLogin(session: Session): void {
    console.log(session);
    this.dialogRef.close();
    // Navigate to student or tutor adequate page
  }
}
