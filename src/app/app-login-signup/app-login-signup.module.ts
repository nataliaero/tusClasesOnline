import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { AppDialogModule } from '../app-dialog';
import { AppLoginApiService } from './app-login-api.service';
import { AppLoginComponent } from './app-login.component';
import { AppLoginFormComponent } from './app-login-form.component';
import { AppLoginService } from './app-login.service';
import { AppSignUpFormComponent } from './app-signup-form.component';
import { AppSignupComponent } from './app-signup.component';
import { AppSignupService } from './app-signup.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppLoginComponent,
    AppLoginFormComponent,
    AppSignupComponent,
    AppSignUpFormComponent,
  ],
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
  exports: [AppLoginComponent, AppLoginFormComponent, AppSignupComponent, AppSignUpFormComponent],
  providers: [
    AppLoginApiService,
    AppLoginService,
    AppSignupService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class AppLoginSignupModule {}
