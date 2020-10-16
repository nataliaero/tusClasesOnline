import { AppButtonModule } from '../app-button';
import { AppCalendarComponent } from './app-calendar.component';
import { CalendarService } from './calendar.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppCalendarComponent],
  imports: [AppButtonModule, CommonModule, MatIconModule, MatTableModule],
  exports: [AppCalendarComponent],
  providers: [CalendarService],
})
export class AppCalendarModule {}
