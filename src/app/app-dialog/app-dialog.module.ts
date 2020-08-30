import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppDialogComponent } from './app-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppDialogComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [AppDialogComponent],
})
export class AppDialogModule {}
