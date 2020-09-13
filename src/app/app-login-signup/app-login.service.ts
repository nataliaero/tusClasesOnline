import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppLoginComponent } from './app-login.component';
import { AppSignupComponent } from './app-signup.component';
import { Observable } from 'rxjs';

@Injectable()
export class AppLoginService {
  constructor(private matDialog: MatDialog) {}

  openLoginDialog(): Observable<void> {
    return this.matDialog
      .open(AppLoginComponent, {
        width: '600px',
        maxWidth: '90vw',
      })
      .afterClosed();
  }
}
