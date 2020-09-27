import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorFiltersComponent } from './tutor-filters.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { AvailabilityFilterComponent } from './availability-filter.component';
import { SortByFilterComponent } from './sort-by-filter.component';
import { PriceFilterComponent } from './price-filter.component';
import { TutorFiltersService } from './tutor-filters.service';
import { LevelFilterComponent } from './level-filter.component';

@NgModule({
  declarations: [
    AvailabilityFilterComponent,
    LevelFilterComponent,
    PriceFilterComponent,
    SortByFilterComponent,
    TutorFiltersComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  providers: [TutorFiltersService],
  exports: [TutorFiltersComponent],
})
export class TutorFiltersModule {}
