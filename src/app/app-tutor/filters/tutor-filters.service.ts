import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TutorFiltersService {
  reset$ = new Subject<void>();

  resetFilters(): void {
    this.reset$.next();
  }
}
