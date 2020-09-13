import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppLoginComponent } from './app-login.component';
import { AppSignupComponent } from './app-signup.component';
import { Observable } from 'rxjs';

@Injectable()
export class AppSignupService {
  constructor(private matDialog: MatDialog) {}

  openSignupDialog(title: string): Observable<void> {
    return this.matDialog
      .open(AppSignupComponent, {
        width: '600px',
        maxWidth: '90vw',
        data: { title },
      })
      .afterClosed();
  }
}
