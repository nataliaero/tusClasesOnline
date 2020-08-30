import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MESSAGES } from '../../messages';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-form',
  template: `
    <form novalidate [formGroup]="loginForm" (ngSubmit)="submit()">
      <div class="username-message">{{ msg.email }}</div>
      <mat-form-field class="form-field" appearance="outline">
        <input
          class="input"
          matInput
          name="username"
          [formControl]="usernameFormControl"
          tabIndex="-1"
        />
        <mat-error *ngIf="usernameFormControl.hasError('required')">
          {{ msg.mandatoryField }}
        </mat-error>
        <mat-error
          *ngIf="usernameFormControl.hasError('email') && !usernameFormControl.hasError('required')"
        >
          {{ msg.emailError }}
        </mat-error>
      </mat-form-field>
      <div class="password-message">
        <div>{{ msg.password }}</div>
        <div class="link">{{ msg.forgetPassword }}</div>
      </div>
      <mat-form-field class="form-field" appearance="outline">
        <input
          class="input"
          matInput
          name="password"
          [formControl]="passwordFormControl"
          tabIndex="-1"
          [type]="passwordType$ | async"
        />
        <mat-icon class="password-visibility" matSuffix (click)="onClickPasswordVisibility()">
          {{ passwordIcon$ | async }}
        </mat-icon>
        <mat-error *ngIf="passwordFormControl.hasError('required')">
          {{ msg.mandatoryField }}
        </mat-error>
      </mat-form-field>
      <div class="check-box">
        <mat-checkbox [formControl]="rememberMeFormControl">
          {{ msg.rememberMe }}
        </mat-checkbox>
      </div>
      <button
        mat-raised-button
        class="submit-button"
        [disabled]="isLoginDisabled$ | async"
        tabIndex="-1"
        type="submit"
      >
        {{ msg.enter }}
      </button>
    </form>
    <div class="register-question">{{ msg.notRegisterYet }}</div>
    <div class="register-links">
      <span>{{ msg.register }}</span>
      <span class="link">{{ msg.registerStudent }}</span>
      <span>{{ msg.or }}</span>
      <span class="link">{{ msg.registerTutor }}</span>
    </div>
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
    mandatoryField: MESSAGES['basic.mandatoryField'],
    emailError: MESSAGES['basic.emailError'],
    registerStudent: MESSAGES['login.registerStudent'],
    registerTutor: MESSAGES['login.registerTutor'],
    or: MESSAGES['basic.or'],
    register: MESSAGES['login.register'],
  };

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(''),
  });

  get usernameFormControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get rememberMeFormControl(): FormControl {
    return this.loginForm.get('rememberMe') as FormControl;
  }

  passwordType$ = new BehaviorSubject<string>('password');
  passwordIcon$ = new BehaviorSubject<string>('visibility');

  isLoginDisabled$ = this.loginForm.statusChanges
    .pipe(startWith('INVALID'))
    .pipe(map(formState => formState === 'INVALID'));

  onClickPasswordVisibility(): void {
    if (this.passwordType$.value === 'password') {
      this.passwordType$.next('text');
      this.passwordIcon$.next('visibility_off');
    } else {
      this.passwordType$.next('password');
      this.passwordIcon$.next('visibility');
    }
  }

  submit(): void {
    console.log('submit');
    if (this.loginForm.invalid) {
      return;
    }
  }
}