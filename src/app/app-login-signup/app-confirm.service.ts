import { AppConfirmComponent } from './app-confirm.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfirmService {
  constructor(private matDialog: MatDialog) {}

  openConfirmDialog(username: string): Observable<void> {
    return this.matDialog
      .open(AppConfirmComponent, {
        width: '600px',
        maxWidth: '90vw',
        data: { username },
      })
      .afterClosed();
  }
}
