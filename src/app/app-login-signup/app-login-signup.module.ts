import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppLoginComponent } from './app-login.component';
import { AppSignupComponent } from './app-signup.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppDialogModule } from '../app-dialog';
import { AppLoginSignUpService } from './app-login-signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormComponent } from './app-login-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AppLoginComponent, AppFormComponent, AppSignupComponent],
  imports: [
    AppDialogModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [AppLoginComponent, AppFormComponent, AppSignupComponent],
  providers: [AppLoginSignUpService, { provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class AppLoginSignupModule {}
