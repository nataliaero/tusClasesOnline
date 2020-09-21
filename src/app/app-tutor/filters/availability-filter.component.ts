import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvailabilityId } from '../types';

export interface Availability {
  disabled: boolean;
  icon: string;
  message: string;
}

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
})
export class AvailabilityFilterComponent {
  @Output() selectAvailabilities = new EventEmitter<AvailabilityId[]>();

  availabilities$ = new BehaviorSubject<Record<AvailabilityId, Availability>>({
    morning: { icon: 'brightness_5_24', message: '7-14h', disabled: false },
    afternoon: { icon: 'brightness_6_24', message: '14-20h', disabled: false },
    evening: { icon: 'brightness_2_24', message: '20-7h', disabled: false },
    weekends: { icon: 'event_note', message: 'Fines de semana', disabled: false },
  });

  private getAvailabilityData(id: AvailabilityId): Availability {
    return this.availabilities$.value[id];
  }

  onClickAvailability(id: AvailabilityId): void {
    const availability = this.getAvailabilityData(id);
    availability.disabled = !availability.disabled;

    const availabilities = this.availabilities$.value;
    availabilities[id] = availability;

    this.availabilities$.next(availabilities);

    const selectedAvailabilities = [];
    for (const key in availabilities) {
      if (!availabilities[key].disabled) {
        selectedAvailabilities.push(key);
      }
    }

    this.selectAvailabilities.emit(selectedAvailabilities);
  }
}
