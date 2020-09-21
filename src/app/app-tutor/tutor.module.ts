import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTutorComponent } from './search-tutor.component';
import { SearchTutorFiltersComponent } from './search-tutor-filters.component';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorCardComponent } from './tutor-card.component';
import { TutorCardActionsComponent } from './tutor-card-actions.component';
import { AppButtonModule } from '../app-button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SearchTutorComponent,
    SearchTutorFiltersComponent,
    TutorCardComponent,
    TutorCardActionsComponent,
  ],
  imports: [
    AppButtonModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSliderModule,
    ReactiveFormsModule,
    TutorRoutingModule,
  ],
  providers: [],
})
export class TutorModule {}
