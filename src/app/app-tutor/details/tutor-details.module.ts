import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorDetailsComponent } from './tutor-details.component';
import { TutorDetailsComponentHeader } from './tutor-details-header.component';
import { TutorDetailsAboutComponent } from './tutor-details-about.component';
import { MatIconModule } from '@angular/material/icon';
import { AppButtonModule } from '../../app-button';

@NgModule({
  declarations: [TutorDetailsAboutComponent, TutorDetailsComponentHeader, TutorDetailsComponent],
  imports: [AppButtonModule, CommonModule, MatIconModule],
  exports: [TutorDetailsComponent],
})
export class TutorDetailsModule {}
