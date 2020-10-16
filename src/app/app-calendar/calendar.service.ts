import { Observable, of } from 'rxjs';

import { AVAILABLE_TIME } from './calendar';
import { AvailableTime } from './types';
import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  getTutorAvailableTimes(
    tutorId: string,
    initialDate: number,
    finalDate: number,
  ): Observable<AvailableTime[]> {
    return of(AVAILABLE_TIME);
  }
}
