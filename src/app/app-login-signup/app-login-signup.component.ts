import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  template: `
    <app-dialog title="Login"></app-dialog>
  `,
  styleUrls: ['./app-login-signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoginSignupComponent {}
