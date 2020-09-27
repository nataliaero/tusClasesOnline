import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TutorFilter } from './types';
import { INITIAL_FILTERS } from './filters/tutor-filters.component';

@Injectable()
export class SearchTutorService {
  selectedFilters$ = new BehaviorSubject<TutorFilter>(INITIAL_FILTERS);

  destroy(): void {
    console.log('COMPLETE');
    this.selectedFilters$.complete();
  }
}
