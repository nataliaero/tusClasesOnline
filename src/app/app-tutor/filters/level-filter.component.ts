import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { SubjectLevels } from '../types';
import { MESSAGES } from '../../../messages';
import { takeUntil, tap } from 'rxjs/operators';
import { TutorFiltersService } from './tutor-filters.service';

const INITIAL_LEVELS = [
  SubjectLevels.Preschool,
  SubjectLevels.Primary,
  SubjectLevels.Secondary,
  SubjectLevels.Superior,
  SubjectLevels.University,
  SubjectLevels.Adults,
];

@Component({
  selector: 'app-level-filter',
  template: `
    <form novalidate class="level-filter" [formGroup]="levelFilterForm">
      <mat-checkbox [formControl]="preschoolFormControl">
        {{ msg.preschool }}
      </mat-checkbox>
      <mat-checkbox [formControl]="primaryFormControl">
        {{ msg.primary }}
      </mat-checkbox>
      <mat-checkbox [formControl]="secondaryFormControl">
        {{ msg.secondary }}
      </mat-checkbox>
      <mat-checkbox [formControl]="superiorFormControl">
        {{ msg.superior }}
      </mat-checkbox>
      <mat-checkbox [formControl]="universityFormControl">
        {{ msg.university }}
      </mat-checkbox>
      <mat-checkbox [formControl]="adultsFormControl">
        {{ msg.adults }}
      </mat-checkbox>
    </form>
  `,
  styleUrls: ['./level-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelFilterComponent implements OnInit, OnDestroy {
  constructor(private tutorFiltersService: TutorFiltersService) {}
  @Input() previousLevels: SubjectLevels[] = INITIAL_LEVELS;
  @Output() changeLevels = new EventEmitter<SubjectLevels[]>();

  msg = {
    lookKeyWord: MESSAGES['searchTutor.lookKeyWord'],
    lookKeyWordPlaceholder: MESSAGES['searchTutor.lookKeyWordPlaceholder'],
    priceRange: MESSAGES['searchTutor.priceRange'],
    availability: MESSAGES['searchTutor.availability'],
    weekends: MESSAGES['searchTutor.weekends'],
    level: MESSAGES['searchTutor.level'],
    preschool: MESSAGES['tutor.preschool'],
    primary: MESSAGES['tutor.primary'],
    secondary: MESSAGES['tutor.secondary'],
    superior: MESSAGES['tutor.superior'],
    university: MESSAGES['tutor.university'],
    adults: MESSAGES['tutor.adults'],
    resetFilter: MESSAGES['searchTutor.resetFilter'],
  };

  levelFilterForm: FormGroup = new FormGroup({
    preschool: new FormControl(true),
    primary: new FormControl(true),
    secondary: new FormControl(true),
    superior: new FormControl(true),
    university: new FormControl(true),
    adults: new FormControl(true),
  });

  private destroy$ = new Subject<void>();

  resetLevels$ = this.tutorFiltersService.reset$.pipe(
    tap(() =>
      this.levelFilterForm.setValue({
        preschool: true,
        primary: true,
        secondary: true,
        superior: true,
        university: true,
        adults: true,
      }),
    ),
  );

  levelFormChanges$ = this.levelFilterForm.valueChanges.pipe(
    tap(value => this.changeLevels.emit(this.getLevels(value))),
  );

  ngOnInit(): void {
    const selectedLevels = {
      preschool: false,
      primary: false,
      secondary: false,
      superior: false,
      university: false,
      adults: false,
    };

    for (const level of this.previousLevels) {
      selectedLevels[level.toLowerCase()] = true;
    }
    this.levelFilterForm.setValue(selectedLevels);

    merge(this.resetLevels$, this.levelFormChanges$).pipe(takeUntil(this.destroy$)).subscribe();
  }

  getLevels(value: any): SubjectLevels[] {
    const levels = [];
    if (value.preschool) {
      levels.push(SubjectLevels.Preschool);
    }
    if (value.primary) {
      levels.push(SubjectLevels.Primary);
    }
    if (value.secondary) {
      levels.push(SubjectLevels.Secondary);
    }
    if (value.superior) {
      levels.push(SubjectLevels.Superior);
    }
    if (value.university) {
      levels.push(SubjectLevels.University);
    }
    if (value.adults) {
      levels.push(SubjectLevels.Adults);
    }
    return levels;
  }

  get preschoolFormControl(): FormControl {
    return this.levelFilterForm.get('preschool') as FormControl;
  }

  get primaryFormControl(): FormControl {
    return this.levelFilterForm.get('primary') as FormControl;
  }

  get secondaryFormControl(): FormControl {
    return this.levelFilterForm.get('secondary') as FormControl;
  }

  get superiorFormControl(): FormControl {
    return this.levelFilterForm.get('superior') as FormControl;
  }

  get universityFormControl(): FormControl {
    return this.levelFilterForm.get('university') as FormControl;
  }

  get adultsFormControl(): FormControl {
    return this.levelFilterForm.get('adults') as FormControl;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
