import { AppAvailableCalendarComponent } from './app-available-calendar.component';
import { AppButtonModule } from '../app-button';
import { CalendarService } from './calendar.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppAvailableCalendarComponent],
  imports: [AppButtonModule, CommonModule, MatIconModule, MatTableModule],
  exports: [AppAvailableCalendarComponent],
  providers: [CalendarService],
})
export class AppAvailableCalendarModule {}
