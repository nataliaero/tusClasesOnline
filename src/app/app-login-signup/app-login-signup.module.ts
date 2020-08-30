import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppLoginComponent } from './app-login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppDialogModule } from '../app-dialog';
import { AppLoginSignUpService } from './app-login-signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormComponent } from './app-login-form.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppLoginComponent, AppFormComponent],
  imports: [
    AppDialogModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [AppLoginComponent, AppFormComponent],
  providers: [AppLoginSignUpService],
})
export class AppLoginSignupModule {}
