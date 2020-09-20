import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { AppBarService } from 'src/services';
import { MESSAGES } from '../../messages';

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
      <h4>{{ priceRange$ | async }}</h4>
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
    keyword: new FormControl(''),
  });

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }

  get keywordFormControl(): FormControl {
    return this.tutorFilterForm.get('keyword') as FormControl;
  }

  onSelectMinPrice(price: MatSliderChange): void {
    this.selectedMinPrice$.next(price.value);
  }

  onSelectMaxPrice(price: MatSliderChange): void {
    this.selectedMaxPrice$.next(price.value);
  }
}
