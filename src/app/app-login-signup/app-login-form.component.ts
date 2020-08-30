import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MESSAGES } from '../../messages';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <form novalidate [formGroup]="loginForm" (ngSubmit)="submit()">
      <div class="input-message">{{ msg.email }}</div>
      <mat-form-field class="username" appearance="outline">
        <input
          class="input"
          matInput
          name="username"
          [formControl]="usernameFormControl"
          tabIndex="-1"
        />
      </mat-form-field>
    </form>
  `,
  styleUrls: ['./app-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFormComponent {
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

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get usernameFormControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  submit(): void {
    console.log('submit');
    if (this.loginForm.invalid) {
      return;
    }
  }
}
