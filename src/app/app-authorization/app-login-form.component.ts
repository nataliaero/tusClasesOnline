import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith, take, tap } from 'rxjs/operators';

import { AppAuthorizationService } from './app-authorization.service';
import { BehaviorSubject } from 'rxjs';
import { MESSAGES } from '../../messages';
import { Session } from '../session';
import { SessionService } from '../session';

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
      <mat-error *ngIf="isLoginFailed$ | async" class="invalid-credentials">
        {{ msg.invalidCredentials }}
      </mat-error>

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
      <span class="link" (click)="onClickRegister('Student')">{{ msg.registerStudent }}</span>
      <span>{{ msg.or }}</span>
      <span class="link" (click)="onClickRegister('Tutor')">{{ msg.registerTutor }}</span>
    </div>
  `,
  styleUrls: ['./app-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoginFormComponent {
  @Output() register = new EventEmitter<string>();
  @Output() login = new EventEmitter<Session>();

  constructor(
    private appAuthorizationService: AppAuthorizationService,
    private sessionService: SessionService,
  ) {}

  msg = {
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
    invalidCredentials: MESSAGES['basic.invalidCredentials'],
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

  isLoginFailed$ = new BehaviorSubject<boolean>(false);
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

  onClickRegister(registerType: string): void {
    this.register.emit(registerType);
  }

  submit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.appAuthorizationService
      .login({
        username: this.usernameFormControl.value,
        password: this.passwordFormControl.value,
      })
      .pipe(
        take(1),
        tap(session => {
          if (!session) {
            this.isLoginFailed$.next(true);
          } else {
            this.isLoginFailed$.next(false);
            this.login.emit(session);
            this.sessionService.setSession(session);
          }
        }),
      )
      .subscribe();
  }
}
