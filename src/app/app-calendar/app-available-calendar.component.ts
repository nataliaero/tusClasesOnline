import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { CALENDAR_MESSAGES, MONTHS, WEEK_DAY } from './app-available-calendar-messages';
import { Component, Input } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';

import { AvailableTime } from './types';
import { CalendarService } from './calendar.service';

const INCREASE_DAY = 86400000;

interface CalendarElement {
  hours: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

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
      <table
        *ngIf="displayedColumns$ | async as displayedColumns"
        class="calendar-table"
        mat-table
        [dataSource]="dataSource$ | async"
      >
        <!-- Hours Column -->
        <ng-container matColumnDef="hours" sticky>
          <th mat-header-cell *matHeaderCellDef>
            <p>{{ msg.hours }}</p>
          </th>
          <td
            mat-cell
            *matCellDef="let element"
            class="calendar-hour-cell"
            style="text-align:center"
          >
            <p>{{ element.hours }}</p>
          </td>
        </ng-container>

        <!-- Week Columns -->
        <ng-container
          *ngFor="let availableTime of availableTimes"
          [matColumnDef]="getWeekDay(availableTime.date)"
        >
          <th mat-header-cell *matHeaderCellDef>
            <p>{{ getWeekDay(availableTime.date) }}</p>
            <p>{{ getDay(availableTime.date) }}</p>
          </th>
          <td mat-cell *matCellDef="let element">
            <div
              *ngIf="isClassAvailable(availableTime.date, element.hours) | async"
              class="calendar-book-class"
              (click)="onSelectAvailableTime($event, availableTime.date, element.hours)"
            >
              {{ msg.book }}
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
    <div *ngIf="selectedTimesLength$ | async" class="calendar-book-available-times">
      <span>¿Quieres reservar las clases seleccionadas?</span>
      <app-button [message]="'Validar'" (click)="onBookAvailableTimes()"></app-button>
    </div>
  `,
  styleUrls: ['./app-available-calendar.component.scss'],
  providers: [CalendarService],
})
export class AppAvailableCalendarComponent {
  @Input() tutorId: string;

  constructor(private calendarService: CalendarService) {}

  msg = CALENDAR_MESSAGES;
  DATE_NOW = Date.now();
  initialDate$ = new BehaviorSubject<number>(this.DATE_NOW);
  finalDate$ = new BehaviorSubject<number>(this.DATE_NOW + INCREASE_DAY * 6);
  reloadAvailableTimes$ = new BehaviorSubject<boolean>(true);

  availableTimes$: Observable<AvailableTime[]> = combineLatest([
    this.initialDate$,
    this.finalDate$,
    this.reloadAvailableTimes$,
  ]).pipe(
    switchMap(([initialDate, finalDate]) =>
      this.calendarService.getTutorAvailableTimes(this.tutorId, initialDate, finalDate),
    ),
  );

  selectedTimes$ = new BehaviorSubject<AvailableTime[]>([]);

  selectedTimesLength$ = this.selectedTimes$.pipe(map(el => el.length));

  displayedColumns$: Observable<string[]> = this.availableTimes$.pipe(
    map(availableTimes => {
      const columns = ['hours'];
      const weekDays = availableTimes.map(el => this.getWeekDay(el.date));
      columns.push(...weekDays);
      return columns;
    }),
  );

  dataSource$: Observable<CalendarElement[]> = this.availableTimes$.pipe(
    map(availableTimes => {
      const row = { hours: '' };
      availableTimes.forEach(el => {
        row[this.getWeekDay(el.date)] = '';
      });

      const data = [];
      for (let index = 6; index < 24; index++) {
        data.push({
          ...row,
          hours: `${index}:00`,
        });
      }

      return data;
    }),
  );

  getWeekDay(date: number): string {
    return WEEK_DAY[new Date(date).getDay()];
  }

  getDay(date: number): string {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    return `${day}/${month}`;
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

  isClassAvailable(date: number, hour: string): Observable<boolean> {
    return this.availableTimes$.pipe(
      map(availableTimes => {
        const findDay = availableTimes.find(el => el.date === date);
        if (!findDay) {
          return false;
        }
        const hourId = hour.split(':').join('');
        return findDay.times.includes(hourId);
      }),
    );
  }

  getSelectedAvailableTimes(): AvailableTime[] {
    return this.selectedTimes$.value;
  }

  onSelectAvailableTime(event: any, date: number, hour: string): void {
    const classList = event.target.classList;
    const classes = event.target.className;
    classes.includes('calendar-book-class-selected')
      ? classList.remove('calendar-book-class-selected')
      : classList.add('calendar-book-class-selected');

    const selectedTimes = this.getSelectedAvailableTimes();
    const hourId = hour.split(':').join('');
    const findDate = selectedTimes.find(el => el.date === date);
    if (!findDate) {
      this.selectedTimes$.next([...selectedTimes, { date, times: [hourId] }]);
      return;
    }

    const findHour = findDate.times.includes(hourId);
    if (!findHour) {
      findDate.times.push(hourId);
      this.selectedTimes$.next(selectedTimes);
      return;
    }

    const findHourIndex = findDate.times.indexOf(hourId);
    findDate.times.splice(findHourIndex, 1);
    if (!findDate.times.length) {
      const findDateIndex = selectedTimes.findIndex(el => el.date === date);
      selectedTimes.splice(findDateIndex, 1);
    }
    this.selectedTimes$.next(selectedTimes);
    console.log(this.selectedTimes$.value);
  }

  onBookAvailableTimes(): void {
    // POST booked times
    this.selectedTimes$.next([]);
    this.reloadAvailableTimes$.next(true);
  }
}
