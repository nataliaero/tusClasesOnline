import { AVAILABLE_TIME, AvailableTime } from '../app-calendar';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Tutor, TutorFilter } from './types';

import { INITIAL_FILTERS } from './filters/tutor-filters.component';
import { Injectable } from '@angular/core';
import { TUTORS } from './tutors';
import { map } from 'rxjs/operators';

@Injectable()
export class TutorService {
  selectedFilters$ = new BehaviorSubject<TutorFilter>(INITIAL_FILTERS);

  getTutorsLength(filters: TutorFilter): Observable<number> {
    return of(TUTORS.length);
  }

  getTutors(pageSize: number, pageIndex: number, filters: TutorFilter): Observable<Tutor[]> {
    const subset = TUTORS.slice(
      pageIndex * pageSize,
      Math.min((pageIndex + 1) * pageSize, TUTORS.length),
    );
    return of(subset);
  }

  getTutor(id: string): Observable<Tutor> {
    return of(TUTORS.find(el => el.id === id));
  }

  getTutorAvailableTimes(
    tutorId: string,
    initialDate: number,
    finalDate: number,
  ): Observable<AvailableTime[]> {
    return of(AVAILABLE_TIME);
  }

  destroy(): void {
    this.selectedFilters$.next(INITIAL_FILTERS);
  }
}
