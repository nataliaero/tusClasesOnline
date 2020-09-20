import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTutorComponent } from './search-tutor.component';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorCardComponent } from './tutor-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchTutorComponent, TutorCardComponent],
  imports: [CommonModule, MatIconModule, TutorRoutingModule],
  providers: [],
})
export class TutorModule {}
