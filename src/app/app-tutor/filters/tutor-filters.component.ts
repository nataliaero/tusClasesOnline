import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { AppBarService } from '../../../services';
import { AvailabilityId, SortByType, SubjectLevels } from '../types';
import { Availability } from './availability-filter.component';
import { TutorFiltersService } from './tutor-filters.service';
import { MESSAGES } from '../../../messages';

const DEBOUNCE_MS = 200;
const MIN_PRICE = 0;
const MAX_PRICE = 100;
const INITIAL_AVAILABILITY: AvailabilityId[] = [
  AvailabilityId.Afternoon,
  AvailabilityId.Evening,
  AvailabilityId.Morning,
  AvailabilityId.Weekends,
];

const INITIAL_LEVELS: SubjectLevels[] = [
  SubjectLevels.Preschool,
  SubjectLevels.Primary,
  SubjectLevels.Secondary,
  SubjectLevels.Superior,
  SubjectLevels.University,
  SubjectLevels.Adults,
];

@Component({
  selector: 'app-tutor-filters',
  template: `
    <form
      novalidate
      [class.search-tutor-filters]="true"
      [class.search-tutor-filters-top]="scroll"
      [formGroup]="tutorFilterForm"
    >
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
      <app-level-filter (changeLevels)="onChangeLevels($event)"></app-level-filter>
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

  msg = {
    lookKeyWord: MESSAGES['searchTutor.lookKeyWord'],
    lookKeyWordPlaceholder: MESSAGES['searchTutor.lookKeyWordPlaceholder'],
    priceRange: MESSAGES['searchTutor.priceRange'],
    availability: MESSAGES['searchTutor.availability'],
    weekends: MESSAGES['searchTutor.weekends'],
    level: MESSAGES['searchTutor.level'],
    preschool: MESSAGES['searchTutor.preschool'],
    primary: MESSAGES['searchTutor.primary'],
    secondary: MESSAGES['searchTutor.secondary'],
    superior: MESSAGES['searchTutor.superior'],
    university: MESSAGES['searchTutor.university'],
    adults: MESSAGES['searchTutor.adults'],
    resetFilter: MESSAGES['searchTutor.resetFilter'],
  };

  tutorFilterForm: FormGroup = new FormGroup({
    keyword: new FormControl('', [Validators.maxLength(20)]),
    minPrice: new FormControl(MIN_PRICE),
    maxPrice: new FormControl(MAX_PRICE),
    availability: new FormControl(INITIAL_AVAILABILITY),
    sortBy: new FormControl(null),
    levels: new FormControl(INITIAL_LEVELS),
  });

  availabilities$ = new BehaviorSubject<Record<AvailabilityId, Availability>>({
    morning: { icon: 'brightness_5_24', message: '7-14h', disabled: false },
    afternoon: { icon: 'brightness_6_24', message: '14-20h', disabled: false },
    evening: { icon: 'brightness_2_24', message: '20-7h', disabled: false },
    weekends: { icon: 'event_note', message: 'Fines de semana', disabled: false },
  });

  private destroy$ = new Subject<void>();
  scroll = false;

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event): void {
    const sc = $event.target.scrollingElement.scrollTop;
    this.scroll = sc >= 50;
  }

  ngOnInit(): void {
    this.appBarService.updateStyle(true);

    this.tutorFilterForm.valueChanges
      .pipe(
        map(value => ({
          keyword: value.keyword,
          levels: value.levels,
          availability: value.availability,
          minPrice: value.minPrice,
          maxPrice: value.maxPrice,
          sortBy: value.sortBy,
        })),
        tap(console.log),
        debounceTime(DEBOUNCE_MS),
        takeUntil(this.destroy$),
      )
      .subscribe();
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

  get sortByFormControl(): FormControl {
    return this.tutorFilterForm.get('sortBy') as FormControl;
  }

  get levelsFormControl(): FormControl {
    return this.tutorFilterForm.get('levels') as FormControl;
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

  onChangeLevels(selectedLevels: SubjectLevels[]): void {
    this.levelsFormControl.setValue(selectedLevels);
  }

  onResetFilters(): void {
    this.tutorFiltersService.resetFilters();
    this.tutorFilterForm.setValue({
      keyword: '',
      minPrice: MIN_PRICE,
      maxPrice: MAX_PRICE,
      availability: INITIAL_AVAILABILITY,
      levels: INITIAL_LEVELS,
      sortBy: null,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
