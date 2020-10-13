import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { Component, Input } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';

import { AvailableTime } from './types';
import { CalendarService } from './calendar.service';

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

interface CalendarElement {
  hours: string;
  Lunes: string;
  Martes: string;
  Miércoles: string;
  Jueves: string;
  Viernes: string;
  Sábado: string;
  Domingo: string;
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
        <ng-container matColumnDef="hours" sticky>
          <th mat-header-cell *matHeaderCellDef><p>Horas</p></th>
          <td mat-cell *matCellDef="let element">
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
            >
              <p>Reservar</p>
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
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
}
