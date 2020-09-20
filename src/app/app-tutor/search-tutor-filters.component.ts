import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { AppBarService } from 'src/services';
import { MESSAGES } from '../../messages';
import { AvailabilityId } from './types';

interface Availability {
  disabled: boolean;
  icon: string;
  message: string;
}

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
        <h4>Min price</h4>
        <mat-slider
          class="search-tutor-slider"
          [min]="minPrice"
          [max]="maxPrice"
          step="1"
          value="minPrice"
          (input)="onSelectMinPrice($event)"
        ></mat-slider>
      </div>
      <div class="search-tutor-price">
        <h4>Max price</h4>
        <mat-slider
          class="search-tutor-slider"
          [min]="minPrice"
          [max]="maxPrice"
          step="1"
          value="minPrice"
          invert="true"
          (input)="onSelectMaxPrice($event)"
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
    </form>
  `,
  styleUrls: ['./search-tutor-filters.component.scss'],
})
export class SearchTutorFiltersComponent implements OnInit {
  constructor(private appBarService: AppBarService) {}

  minPrice = 0;
  maxPrice = 100;

  selectedMinPrice$ = new BehaviorSubject<number>(this.minPrice);
  selectedMaxPrice$ = new BehaviorSubject<number>(this.minPrice);

  priceRange$: Observable<string> = combineLatest([
    this.selectedMinPrice$,
    this.selectedMaxPrice$,
  ]).pipe(
    map(
      ([selectedMinPrice, selectedMaxPrice]) =>
        `${selectedMinPrice}€/h - ${100 - selectedMaxPrice}€/h`,
    ),
    startWith(`${this.minPrice}€/h - ${this.maxPrice}€/h`),
  );

  msg = {
    findIdealTutor: MESSAGES['searchTutor.findIdealTutor'],
    filtersTip: MESSAGES['searchTutor.filtersTip'],
    bookAClass: MESSAGES['searchTutor.bookAClass'],
    sendMessage: MESSAGES['searchTutor.sendMessage'],
    readMore: MESSAGES['searchTutor.readMore'],
    fee: MESSAGES['searchTutor.fee'],
    ratings: MESSAGES['searchTutor.ratings'],
    whatToLearn: MESSAGES['searchTutor.whatToLearn'],
    lookKeyWord: MESSAGES['searchTutor.lookKeyWord'],
    lookKeyWordPlaceholder: MESSAGES['searchTutor.lookKeyWordPlaceholder'],
    priceRange: MESSAGES['searchTutor.priceRange'],
    availability: MESSAGES['searchTutor.availability'],
    weekends: MESSAGES['searchTutor.weekends'],
    speaks: MESSAGES['searchTutor.speaks'],
    sortBy: MESSAGES['searchTutor.sortBy'],
  };

  tutorFilterForm: FormGroup = new FormGroup({
    keyword: new FormControl('', [Validators.maxLength(30)]),
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    availability: new FormControl(''),
  });

  availabilities$ = new BehaviorSubject<Record<AvailabilityId, Availability>>({
    morning: { icon: 'brightness_5_24', message: '7-14h', disabled: false },
    afternoon: { icon: 'brightness_6_24', message: '14-20h', disabled: false },
    evening: { icon: 'brightness_2_24', message: '20-7h', disabled: false },
    weekends: { icon: 'event_note', message: 'Fines de semana', disabled: false },
  });

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
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

  onSelectMinPrice(price: MatSliderChange): void {
    this.selectedMinPrice$.next(price.value);
    this.minPriceFormControl.setValue({ minPrice: price.value });
  }

  onSelectMaxPrice(price: MatSliderChange): void {
    this.selectedMaxPrice$.next(price.value);
    this.maxPriceFormControl.setValue({ maxPrice: price.value });
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

    this.availabilityFormControl.setValue({ availability: selectedAvailabilities });
  }
}
