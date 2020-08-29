import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppLoginSignupComponent } from './app-login-signup.component';
import { Observable } from 'rxjs';

@Injectable()
export class AppLoginSignUpService {
  constructor(private matDialog: MatDialog) {}

  openDialog(): Observable<void> {
    return this.matDialog.open(AppLoginSignupComponent).afterClosed();
  }
}
