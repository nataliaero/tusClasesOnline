import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MESSAGES } from '../../messages';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-signup-form',
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
      <div class="password-message">{{ msg.password }}</div>
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
      <div class="password-message">{{ msg.repeatPassword }}</div>
      <mat-form-field class="form-field" appearance="outline">
        <input
          class="input"
          matInput
          name="repeatPassword"
          [formControl]="repeatPasswordFormControl"
          tabIndex="-1"
          [type]="passwordType$ | async"
        />
        <mat-icon class="password-visibility" matSuffix (click)="onClickPasswordVisibility()">
          {{ passwordIcon$ | async }}
        </mat-icon>
        <mat-error *ngIf="repeatPasswordFormControl.hasError('required')">
          {{ msg.mandatoryField }}
        </mat-error>
      </mat-form-field>
      <div class="check-box">
        <mat-checkbox [formControl]="rememberMeFormControl">
          {{ msg.rememberMe }}
        </mat-checkbox>
      </div>
      <div class="check-box">
        <mat-checkbox [formControl]="acceptLegalTermsFormControl">
          {{ msg.acceptLegalTerms }}
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
  `,
  styleUrls: ['./app-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSignUpFormComponent {
  msg = {
    enter: MESSAGES['signup.register'],
    email: MESSAGES['basic.email'],
    password: MESSAGES['basic.password'],
    repeatPassword: MESSAGES['basic.repeatPassword'],
    rememberMe: MESSAGES['basic.rememberMe'],
    forgetPassword: MESSAGES['basic.forgetPassword'],
    notRobot: MESSAGES['basic.notRobot'],
    notRegisterYet: MESSAGES['login.notRegisterYet'],
    mandatoryField: MESSAGES['basic.mandatoryField'],
    emailError: MESSAGES['basic.emailError'],
    acceptLegalTerms: MESSAGES['basic.acceptLegalTerms'],
  };

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(''),
    acceptLegalTerms: new FormControl('', [Validators.requiredTrue]),
  });

  get usernameFormControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get repeatPasswordFormControl(): FormControl {
    return this.loginForm.get('repeatPassword') as FormControl;
  }

  get rememberMeFormControl(): FormControl {
    return this.loginForm.get('rememberMe') as FormControl;
  }

  get acceptLegalTermsFormControl(): FormControl {
    return this.loginForm.get('acceptLegalTerms') as FormControl;
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
