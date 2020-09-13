import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTutorComponent } from './search-tutor.component';
import { TutorRoutingModule } from './tutor-routing.module';

@NgModule({
  declarations: [SearchTutorComponent],
  imports: [CommonModule, TutorRoutingModule],
  providers: [],
})
export class TutorModule {}
