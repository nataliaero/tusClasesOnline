import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppLoginComponent } from './app-login.component';
import { Observable } from 'rxjs';

@Injectable()
export class AppLoginSignUpService {
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
