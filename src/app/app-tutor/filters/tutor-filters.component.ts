import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { AppBarService } from '../../../services';
import { TUTOR_MESSAGES } from '../tutor-messages';
import { AvailabilityId, SortByType, SubjectLevels } from '../types';
import { Availability } from './availability-filter.component';
import { TutorFiltersService } from './tutor-filters.service';

const DEBOUNCE_MS = 200;

@Component({
  selector: 'app-tutor-filters',
  template: `
    <form novalidate class="search-tutor-filters" [formGroup]="tutorFilterForm">
      <h4 class="filter-title">{{ msg.lookKeyWord }}</h4>
      <mat-form-field class="keyword-field" appearance="outline">
        <input
          class="input"
          matInput
          name="keyword"
          [formControl]="keywordFormControl"
          [placeholder]="msg.lookKeyWordPlaceholder"
          tabIndex="-1"
        />
      </mat-form-field>
      <div class="search-tutor-separator"></div>
      <h4 class="filter-title">{{ msg.priceRange }}</h4>
      <app-price-filter
        class="search-tutor-price"
        (changePriceMin)="onChangeMinPrice($event)"
        (changePriceMax)="onChangeMaxPrice($event)"
      ></app-price-filter>
      <div class="search-tutor-separator"></div>
      <h4 class="filter-title">{{ msg.availability }}</h4>
      <app-availability-filter
        class="search-tutor-availabilities"
        (selectAvailabilities)="onClickAvailability($event)"
      ></app-availability-filter>
      <div class="search-tutor-separator"></div>
      <h4 class="filter-title">{{ msg.level }}</h4>
      <div class="search-tutor-level">
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
      </div>
      <div class="search-tutor-separator"></div>
      <app-sort-by-filter
        class="search-tutor-sort-menu"
        (selectSortBy)="onClickSortByMenu($event)"
      ></app-sort-by-filter>

      <div class="search-tutor-separator"></div>
      <h4 class="search-tutor-reset" (click)="onResetFilters()">{{ msg.resetFilter }}</h4>
    </form>
  `,
  styleUrls: ['./tutor-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorFiltersComponent implements OnInit, OnDestroy {
  constructor(
    private appBarService: AppBarService,
    private tutorFiltersService: TutorFiltersService,
  ) {}

  tutorFilterForm: FormGroup = new FormGroup({
    keyword: new FormControl('', [Validators.maxLength(20)]),
    minPrice: new FormControl(0),
    maxPrice: new FormControl(100),
    availability: new FormControl([
      AvailabilityId.Afternoon,
      AvailabilityId.Evening,
      AvailabilityId.Morning,
      AvailabilityId.Weekends,
    ]),
    preschool: new FormControl(true),
    primary: new FormControl(true),
    secondary: new FormControl(true),
    superior: new FormControl(true),
    university: new FormControl(true),
    adults: new FormControl(true),
    sortBy: new FormControl(null),
  });

  msg = TUTOR_MESSAGES;

  selectedLevels$ = new BehaviorSubject<SubjectLevels[]>([
    SubjectLevels.Preschool,
    SubjectLevels.Primary,
    SubjectLevels.Secondary,
    SubjectLevels.Superior,
    SubjectLevels.University,
    SubjectLevels.Adults,
  ]);

  availabilities$ = new BehaviorSubject<Record<AvailabilityId, Availability>>({
    morning: { icon: 'brightness_5_24', message: '7-14h', disabled: false },
    afternoon: { icon: 'brightness_6_24', message: '14-20h', disabled: false },
    evening: { icon: 'brightness_2_24', message: '20-7h', disabled: false },
    weekends: { icon: 'event_note', message: 'Fines de semana', disabled: false },
  });

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.appBarService.updateStyle(true);

    this.tutorFilterForm.valueChanges
      .pipe(
        map(value => ({
          keyword: value.keyword,
          levels: this.getLevels(value),
          availability: value.availability,
          minPrice: value.minPrice,
          maxPrice: value.maxPrice,
          sortBy: value.sortBy,
        })),
        debounceTime(DEBOUNCE_MS),
        tap(res => console.log(res)),
        takeUntil(this.destroy$),
      )
      .subscribe();
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

  get keywordFormControl(): FormControl {
    return this.tutorFilterForm.get('keyword') as FormControl;
  }

  get availabilityFormControl(): FormControl {
    return this.tutorFilterForm.get('availability') as FormControl;
  }

  get minPriceFormControl(): FormControl {
    return this.tutorFilterForm.get('minPrice') as FormControl;
  }

  get maxPriceFormControl(): FormControl {
    return this.tutorFilterForm.get('maxPrice') as FormControl;
  }

  get preschoolFormControl(): FormControl {
    return this.tutorFilterForm.get('preschool') as FormControl;
  }

  get primaryFormControl(): FormControl {
    return this.tutorFilterForm.get('primary') as FormControl;
  }

  get secondaryFormControl(): FormControl {
    return this.tutorFilterForm.get('secondary') as FormControl;
  }

  get superiorFormControl(): FormControl {
    return this.tutorFilterForm.get('superior') as FormControl;
  }

  get universityFormControl(): FormControl {
    return this.tutorFilterForm.get('university') as FormControl;
  }

  get adultsFormControl(): FormControl {
    return this.tutorFilterForm.get('adults') as FormControl;
  }

  get sortByFormControl(): FormControl {
    return this.tutorFilterForm.get('sortBy') as FormControl;
  }

  onChangeMinPrice(price: number): void {
    this.minPriceFormControl.setValue(price);
  }

  onChangeMaxPrice(price: number): void {
    this.maxPriceFormControl.setValue(price);
  }

  onClickAvailability(selectedAvailabilities: AvailabilityId[]): void {
    this.availabilityFormControl.setValue(selectedAvailabilities);
  }

  onClickSortByMenu(selectedSortBy: SortByType): void {
    this.sortByFormControl.setValue(selectedSortBy);
  }

  onResetFilters(): void {
    this.tutorFiltersService.resetFilters();
    this.tutorFilterForm.setValue({
      keyword: '',
      minPrice: 0,
      maxPrice: 100,
      availability: [
        AvailabilityId.Afternoon,
        AvailabilityId.Evening,
        AvailabilityId.Morning,
        AvailabilityId.Weekends,
      ],
      preschool: true,
      primary: true,
      secondary: true,
      superior: true,
      university: true,
      adults: true,
      sortBy: null,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
