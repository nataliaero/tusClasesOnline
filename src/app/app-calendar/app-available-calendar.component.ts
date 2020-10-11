import { Component, Input } from '@angular/core';

import { AvailableTime } from './types';

const WEEK_DAY = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

@Component({
  selector: 'app-calendar-available-time',
  template: `
    <div *ngFor="let availableTime of availableTimes" class="calendar-available-week-day">
      <div class="calendar-separator"></div>
      <p>{{ getWeekDay(availableTime.date) }}</p>
      <p>{{ getMonthDay(availableTime.date) }}</p>
    </div>
  `,
  styleUrls: ['./app-available-calendar.component.scss'],
})
export class AppAvailableCalendarComponent {
  @Input() availableTimes: AvailableTime[];

  getWeekDay(date: number): string {
    console.log(new Date(date));
    console.log(new Date(date).getDay());
    return WEEK_DAY[new Date(date).getDay()];
  }

  getMonthDay(date: number): number {
    return new Date(date).getDate();
  }
}
