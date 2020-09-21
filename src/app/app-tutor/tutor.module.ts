import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTutorComponent } from './search-tutor.component';
import { TutorFiltersModule } from './filters';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorCardComponent } from './tutor-card.component';
import { TutorCardActionsComponent } from './tutor-card-actions.component';
import { AppButtonModule } from '../app-button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchTutorComponent, TutorCardComponent, TutorCardActionsComponent],
  imports: [AppButtonModule, CommonModule, MatIconModule, TutorFiltersModule, TutorRoutingModule],
  providers: [],
})
export class TutorModule {}
