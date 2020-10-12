import { AppAvailableCalendarComponent } from './app-available-calendar.component';
import { CalendarService } from './calendar.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppAvailableCalendarComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AppAvailableCalendarComponent],
  providers: [CalendarService],
})
export class AppAvailableCalendarModule {}
