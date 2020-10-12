import { BehaviorSubject, combineLatest } from 'rxjs';
import { Component, Input } from '@angular/core';

import { CalendarService } from './calendar.service';
import { switchMap } from 'rxjs/operators';

const WEEK_DAY = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const INCREASE_DAY = 86400000;

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

@Component({
  selector: 'app-calendar-available-time',
  template: `
    <div class="calendar-paginator">
      <mat-icon [class]="getClassReduceDate()" (click)="onReduceDate()">chevron_left</mat-icon>
      <mat-icon (click)="onIncreaseDate()">chevron_right</mat-icon>
      <p class="calendar-paginator-dates">
        {{ getPaginatorDates(initialDate$ | async, finalDate$ | async) }}
      </p>
    </div>
    <div *ngIf="availableTimes$ | async as availableTimes" class="calendar-available-times">
      <div
        *ngFor="let availableTime of availableTimes; first as isFirst"
        class="calendar-available-time"
      >
        <div class="calendar-separator"></div>
        <p [class.week-day-now]="isInitialDateNow && isFirst">
          {{ getWeekDay(availableTime.date) }}
        </p>
        <p [class.month-day-now]="isInitialDateNow && isFirst">
          {{ getMonthDay(availableTime.date) }}
        </p>
        <div class="calendar-separator"></div>
        <div *ngFor="let time of availableTime.times" class="calendar-times">
          <p>{{ getTime(time) }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app-available-calendar.component.scss'],
  providers: [CalendarService],
})
export class AppAvailableCalendarComponent {
  @Input() tutorId: string;

  constructor(private calendarService: CalendarService) {}

  DATE_NOW = Date.now();
  initialDate$ = new BehaviorSubject<number>(this.DATE_NOW);
  finalDate$ = new BehaviorSubject<number>(this.DATE_NOW + INCREASE_DAY * 6);

  availableTimes$ = combineLatest([this.initialDate$, this.finalDate$]).pipe(
    switchMap(([initialDate, finalDate]) =>
      this.calendarService.getTutorAvailableTimes(this.tutorId, initialDate, finalDate),
    ),
  );

  getWeekDay(date: number): string {
    return WEEK_DAY[new Date(date).getDay()];
  }

  getMonthDay(date: number): number {
    return new Date(date).getDate();
  }

  getTime(time: string): string {
    const timeArr = time.split('');
    const minutes = timeArr.splice(-2, 2).join('');
    const hour = timeArr.join('');
    return `${hour}:${minutes}`;
  }

  get isInitialDateNow(): boolean {
    return String(new Date(this.initialDate$.value)) === String(new Date(this.DATE_NOW));
  }

  getClassReduceDate(): string {
    return this.isInitialDateNow ? 'icon-disabled' : 'icon-enabled';
  }

  getPaginatorDates(initial: number, final: number): string {
    const initialDate = new Date(initial);
    const finalDate = new Date(final);

    const initialYear = initialDate.getFullYear();
    const finalYear = finalDate.getFullYear();

    const initialMonth = MONTHS[initialDate.getMonth()];
    const finalMonth = MONTHS[finalDate.getMonth()];

    const initialDay = initialDate.getDate();
    const finalDay = finalDate.getDate();

    return `${initialDay} ${initialMonth} ${initialYear} - ${finalDay} ${finalMonth} ${finalYear}`;
  }

  onReduceDate(): void {
    if (this.isInitialDateNow) {
      return;
    }

    this.initialDate$.next(this.initialDate$.value - INCREASE_DAY * 6);
    this.finalDate$.next(this.finalDate$.value - INCREASE_DAY * 6);
  }

  onIncreaseDate(): void {
    this.initialDate$.next(this.initialDate$.value + INCREASE_DAY * 6);
    this.finalDate$.next(this.finalDate$.value + INCREASE_DAY * 6);
  }
}
