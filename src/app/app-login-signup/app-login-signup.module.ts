import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppLoginSignupComponent } from './app-login-signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppDialogModule } from '../app-dialog';
import { AppLoginSignUpService } from './app-login-signup.service';

@NgModule({
  declarations: [AppLoginSignupComponent],
  imports: [AppDialogModule, CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [AppLoginSignupComponent],
  providers: [AppLoginSignUpService],
})
export class AppLoginSignupModule {}
