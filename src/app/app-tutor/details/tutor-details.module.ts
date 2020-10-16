import { AppButtonModule } from '../../app-button';
import { AppCalendarModule } from '../../app-calendar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { TutorDetailsAboutComponent } from './tutor-details-about.component';
import { TutorDetailsComponent } from './tutor-details.component';
import { TutorDetailsHeaderComponent } from './tutor-details-header.component';

@NgModule({
  declarations: [TutorDetailsAboutComponent, TutorDetailsHeaderComponent, TutorDetailsComponent],
  imports: [AppButtonModule, AppCalendarModule, CommonModule, MatIconModule],
  exports: [TutorDetailsComponent],
})
export class TutorDetailsModule {}
