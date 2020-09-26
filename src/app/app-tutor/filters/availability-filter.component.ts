import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AvailabilityId } from '../types';
import { TutorFiltersService } from './tutor-filters.service';

export interface Availability {
  disabled: boolean;
  icon: string;
  message: string;
}

type Nil = undefined | null;

const INITIAL_AVAILABILITY: Record<AvailabilityId, Availability> = {
  morning: { icon: 'brightness_5_24', message: '7-14h', disabled: false },
  afternoon: { icon: 'brightness_6_24', message: '14-20h', disabled: false },
  evening: { icon: 'brightness_2_24', message: '20-7h', disabled: false },
  weekends: { icon: 'event_note', message: 'Fines de semana', disabled: false },
};

@Component({
  selector: 'app-availability-filter',
  template: `
    <div
      *ngFor="let availability of availabilities$ | async | keyvalue"
      [class.search-tutor-availability]="true"
      [class.search-tutor-availability-disabled]="availability.value.disabled"
      (click)="onClickAvailability(availability.key)"
    >
      <mat-icon>{{ availability.value.icon }}</mat-icon>
      <h5
        [class.search-tutor-availability-msg]="true"
        [class.search-tutor-availability-msg-disabled]="availability.value.disabled"
      >
        {{ availability.value.message }}
      </h5>
    </div>
  `,
  styleUrls: ['./availability-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityFilterComponent implements OnInit, OnDestroy {
  constructor(private tutorFiltersService: TutorFiltersService) {}
  @Output() selectAvailabilities = new EventEmitter<AvailabilityId[]>();

  availabilities$ = new BehaviorSubject<Record<AvailabilityId, Availability>>(INITIAL_AVAILABILITY);

  private destroy$ = new Subject<void>();

  private getAvailabilityData(id: AvailabilityId): Availability {
    return { ...this.availabilities$.value[id] };
  }

  ngOnInit(): void {
    this.tutorFiltersService.reset$
      .pipe(
        tap(() => this.availabilities$.next(INITIAL_AVAILABILITY)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  onClickAvailability(id: AvailabilityId): void {
    const availability = this.getAvailabilityData(id);
    availability.disabled = !availability.disabled;

    const availabilities = { ...this.availabilities$.value, [id]: availability };
    this.availabilities$.next(availabilities);

    const selectedAvailabilities = [];
    for (const key in availabilities) {
      if (!availabilities[key].disabled) {
        selectedAvailabilities.push(key);
      }
    }

    this.selectAvailabilities.emit(selectedAvailabilities);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
