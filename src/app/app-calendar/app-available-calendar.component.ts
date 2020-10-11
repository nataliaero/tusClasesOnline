import { Component, Input } from '@angular/core';
import { AvailableTime } from './types';


@Component({
  selector: 'app-calendar-available-time',
  template: `
    <div *ngFor="let availableTime of availableTimes">
      <div class="calendar-separator">HELLO</div>
    </div>
  `,
  styleUrls: ['./app-available-calendar.component.scss'],
})
export class AppAvailableCalendarComponent {
  @Input() availableTimes: AvailableTime[];
}


