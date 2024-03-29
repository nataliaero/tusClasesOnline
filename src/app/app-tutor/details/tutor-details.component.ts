import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { AppBarService } from '../../../services';
import { TutorService } from '../tutor.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tutor-details',
  template: `
    <app-tutor-details-header
      [tutor]="tutor$ | async"
      (bookClass)="onClickBookClass()"
    ></app-tutor-details-header>
    <app-tutor-details-about [tutor]="tutor$ | async"></app-tutor-details-about>
    <div *ngIf="tutor$ | async as tutor" class="tutor-details-calendar" id="calendar">
      <div class="tutor-details-calendar-content">
        <h2>Reserva tus clases online</h2>
        <div class="tutor-details-calendar-separator"></div>
        <p>Las clases tienen una duración de {{ tutor.classDurationMinutes }} minutos</p>
        <app-calendar [tutor]="tutor$ | async"></app-calendar>
      </div>
    </div>
  `,
  styleUrls: ['./tutor-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorDetailsComponent implements OnInit, AfterViewInit {
  constructor(
    private appBarService: AppBarService,
    private route: ActivatedRoute,
    private tutorService: TutorService,
  ) {}

  tutor$ = this.route.paramMap.pipe(
    switchMap(params => this.tutorService.getTutor(params.get('id'))),
  );

  onClickBookClass(): void {
    document.getElementById('calendar').scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      document.getElementById(fragment).scrollIntoView();
    });
  }
}
