import { BehaviorSubject, combineLatest } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AppBarService } from '../../../services';
import { TutorService } from '../tutor.service';
import { switchMap } from 'rxjs/operators';

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
  selector: 'app-tutor-details',
  template: `
    <app-tutor-details-header [tutor]="tutor$ | async"></app-tutor-details-header>
    <app-tutor-details-about [tutor]="tutor$ | async"></app-tutor-details-about>
    <div *ngIf="tutor$ | async as tutor" class="tutor-details-calendar">
      <div class="tutor-details-calendar-content">
        <h2>Reserva una clase particular online</h2>
        <div class="tutor-details-calendar-separator"></div>
        <p>Las clases tienen una duración de {{ tutor.classDurationMinutes }} minutos</p>
        <div class="tutor-details-calendar-paginator">
          <mat-icon [class]="getClassReduceDate()" (click)="onReduceDate()">chevron_left</mat-icon>
          <mat-icon (click)="onIncreaseDate()">chevron_right</mat-icon>
          <p class="tutor-details-calendar-paginator-dates">
            {{ getPaginatorDates(initialDate$ | async, finalDate$ | async) }}
          </p>
        </div>
        <app-calendar-available-time
          [availableTimes]="availableTimes$ | async"
        ></app-calendar-available-time>
      </div>
    </div>
  `,
  styleUrls: ['./tutor-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorDetailsComponent implements OnInit {
  constructor(
    private appBarService: AppBarService,
    private route: ActivatedRoute,
    private tutorService: TutorService,
  ) {}

  /**
   * Today's date in milliseconds from 1970
   */
  DATE_NOW = Date.now();

  initialDate$ = new BehaviorSubject<number>(this.DATE_NOW);
  finalDate$ = new BehaviorSubject<number>(this.DATE_NOW + INCREASE_DAY * 6);

  availableTimes$ = combineLatest([this.route.paramMap, this.initialDate$, this.finalDate$]).pipe(
    switchMap(([params, initialDate, finalDate]) =>
      this.tutorService.getTutorAvailableTimes(params.get('id'), initialDate, finalDate),
    ),
  );

  tutor$ = this.route.paramMap.pipe(
    switchMap(params => this.tutorService.getTutor(params.get('id'))),
  );

  private isInitialDateNow(): boolean {
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

    const initialMonth = MONTHS[initialDate.getMonth() - 1];
    const finalMonth = MONTHS[finalDate.getMonth() - 1];

    const initialDay = initialDate.getDate();
    const finalDay = finalDate.getDate();

    return `${initialDay} ${initialMonth} ${initialYear} - ${finalDay} ${finalMonth} ${finalYear}`;
  }

  onReduceDate(): void {
    if (this.isInitialDateNow()) {
      return;
    }

    this.initialDate$.next(this.initialDate$.value - INCREASE_DAY * 6);
    this.finalDate$.next(this.finalDate$.value - INCREASE_DAY * 6);
  }

  onIncreaseDate(): void {
    this.initialDate$.next(this.initialDate$.value + INCREASE_DAY * 6);
    this.finalDate$.next(this.finalDate$.value + INCREASE_DAY * 6);
  }

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }
}
