import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { AppBarService } from '../../../services';
import { TUTOR_MESSAGES } from '../tutor-messages';
import { AvailabilityId, SortByType, SubjectLevels, TutorFilter } from '../types';

interface Availability {
  disabled: boolean;
  icon: string;
  message: string;
}

const DEBOUNCE_MS = 200;

@Component({
  selector: 'app-search-tutor-filters',
  template: `
    <form novalidate class="search-tutor-filters" [formGroup]="tutorFilterForm">
      <h4>{{ msg.whatToLearn }}</h4>
      <div class="search-tutor-separator"></div>
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
      <div class="search-tutor-price">
        <h4>{{ msg.minPrice }}</h4>
        <mat-slider
          class="search-tutor-slider"
          [min]="minPrice"
          [max]="maxPrice"
          step="1"
          [value]="selectedMinPrice$ | async"
          (input)="onSelectMinPrice($event)"
          (change)="onChangeMinPrice($event)"
        ></mat-slider>
      </div>
      <div class="search-tutor-price">
        <h4>{{ msg.maxPrice }}</h4>
        <mat-slider
          class="search-tutor-slider"
          [min]="minPrice"
          [max]="maxPrice"
          step="1"
          [value]="this.maxPrice - (selectedMaxPrice$ | async)"
          invert="true"
          (input)="onSelectMaxPrice($event)"
          (change)="onChangeMaxPrice($event)"
        ></mat-slider>
      </div>
      <h4 class="search-tutor-price-range">{{ priceRange$ | async }}</h4>
      <div class="search-tutor-separator"></div>
      <h4 class="filter-title">{{ msg.availability }}</h4>
      <div class="search-tutor-availabilities">
        <div
          *ngFor="let availability of availabilities$ | async | keyvalue"
          [class.search-tutor-availability]="true"
          [class.search-tutor-availability-disabled]="availability.value.disabled"
          (click)="onClickAvailability(availability.key)"
        >
          <mat-icon>{{ availability.value.icon }}</mat-icon>
          <h5
            [class.search-tutor-availability-msg]="true"
            [class.search-tutor-availability-msg-disabled]="availability.value.disabled"
          >
            {{ availability.value.message }}
          </h5>
        </div>
      </div>
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
      <div class="search-tutor-sort-menu" [matMenuTriggerFor]="menu">
        <div class="search-tutor-sort-menu-left">
          <mat-icon>sort</mat-icon>
          <span>{{ msg.sortBy }}</span>
        </div>
        <mat-icon>arrow_drop_down</mat-icon>
      </div>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="onClickMenu('popularity')">
          <span>{{ msg.popularity }}</span>
        </button>
        <button mat-menu-item (click)="onClickMenu('priceMin')">
          <span>{{ msg.priceMin }}</span>
        </button>
        <button mat-menu-item (click)="onClickMenu('priceMax')">
          <span>{{ msg.priceMax }}</span>
        </button>
        <button mat-menu-item (click)="onClickMenu('rating')">
          <span>{{ msg.rating }}</span>
        </button>
      </mat-menu>
      <div class="search-tutor-separator"></div>
      <h4 class="search-tutor-reset" (click)="onResetFilters()">{{ msg.resetFilter }}</h4>
    </form>
  `,
  styleUrls: ['./tutor-filters.component.scss'],
})
export class TutorFiltersComponent implements OnInit, OnDestroy {
  constructor(private appBarService: AppBarService) {}

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

  minPrice = 0;
  maxPrice = 100;
  msg = TUTOR_MESSAGES;

  selectedMinPrice$ = new BehaviorSubject<number>(this.minPrice);
  selectedMaxPrice$ = new BehaviorSubject<number>(this.maxPrice);
  selectedLevels$ = new BehaviorSubject<SubjectLevels[]>([
    SubjectLevels.Preschool,
    SubjectLevels.Primary,
    SubjectLevels.Secondary,
    SubjectLevels.Superior,
    SubjectLevels.University,
    SubjectLevels.Adults,
  ]);

  priceRange$: Observable<string> = combineLatest([
    this.selectedMinPrice$,
    this.selectedMaxPrice$,
  ]).pipe(
    map(
      ([selectedMinPrice, selectedMaxPrice]) => `${selectedMinPrice}€/h - ${selectedMaxPrice}€/h`,
    ),
    startWith(`${this.minPrice}€/h - ${this.maxPrice}€/h`),
  );

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

  onSelectMinPrice(price: MatSliderChange): void {
    this.selectedMinPrice$.next(price.value);
    this.minPriceFormControl.setValue(price.value);
  }

  onChangeMinPrice(price: MatSliderChange): void {
    this.minPriceFormControl.setValue(price.value);
  }

  onSelectMaxPrice(price: MatSliderChange): void {
    this.selectedMaxPrice$.next(this.maxPrice - price.value);
  }

  onChangeMaxPrice(price: MatSliderChange): void {
    this.maxPriceFormControl.setValue(this.maxPrice - price.value);
  }

  private getAvailabilityData(id: AvailabilityId): Availability {
    return this.availabilities$.value[id];
  }

  onClickAvailability(id: AvailabilityId): void {
    const availability = this.getAvailabilityData(id);
    availability.disabled = !availability.disabled;

    const availabilities = this.availabilities$.value;
    availabilities[id] = availability;

    this.availabilities$.next(availabilities);

    const selectedAvailabilities = [];
    for (const key in availabilities) {
      if (!availabilities[key].disabled) {
        selectedAvailabilities.push(key);
      }
    }

    this.availabilityFormControl.setValue(selectedAvailabilities);
  }

  onClickMenu(selectedSortBy: SortByType): void {
    this.sortByFormControl.setValue(selectedSortBy);
  }

  onResetFilters(): void {
    this.selectedMinPrice$.next(this.minPrice);
    this.selectedMaxPrice$.next(this.maxPrice);

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
