import { Component, Input } from '@angular/core';

import { AvailableTime } from './types';

const WEEK_DAY = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

@Component({
  selector: 'app-calendar-available-time',
  template: `
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
  `,
  styleUrls: ['./app-available-calendar.component.scss'],
})
export class AppAvailableCalendarComponent {
  @Input() availableTimes: AvailableTime[];
  @Input() isInitialDateNow: boolean;

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
}
