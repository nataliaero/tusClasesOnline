import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MESSAGES } from '../../../messages';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { MatSliderChange } from '@angular/material/slider';
import { TutorFiltersService } from './tutor-filters.service';

@Component({
  selector: 'app-price-filter',
  template: `
    <div class="price-filter">
      <h4>{{ msg.minPrice }}</h4>
      <mat-slider
        class="price-filter-slider"
        [min]="minPrice"
        [max]="maxPrice"
        step="1"
        [value]="selectedMinPrice$ | async"
        (input)="onMoveSliderMinPrice($event)"
        (change)="onChangeMinPrice($event)"
      ></mat-slider>
    </div>
    <div class="price-filter">
      <h4>{{ msg.maxPrice }}</h4>
      <mat-slider
        class="price-filter-slider"
        [min]="minPrice"
        [max]="maxPrice"
        step="1"
        [value]="this.maxPrice - (selectedMaxPrice$ | async)"
        invert="true"
        (input)="onMoveSliderMaxPrice($event)"
        (change)="onChangeMaxPrice($event)"
      ></mat-slider>
    </div>
    <h4 class="price-filter-range">{{ priceRange$ | async }}</h4>
  `,
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit, OnDestroy {
  constructor(private tutorFiltersService: TutorFiltersService) {}
  @Output() changePriceMin = new EventEmitter<number>();
  @Output() changePriceMax = new EventEmitter<number>();

  minPrice = 0;
  maxPrice = 100;

  selectedMinPrice$ = new BehaviorSubject<number>(this.minPrice);
  selectedMaxPrice$ = new BehaviorSubject<number>(this.maxPrice);

  priceRange$: Observable<string> = combineLatest([
    this.selectedMinPrice$,
    this.selectedMaxPrice$,
  ]).pipe(
    map(
      ([selectedMinPrice, selectedMaxPrice]) => `${selectedMinPrice}€/h - ${selectedMaxPrice}€/h`,
    ),
    startWith(`${this.minPrice}€/h - ${this.maxPrice}€/h`),
  );

  msg = {
    maxPrice: MESSAGES['searchTutor.maxPrice'],
    minPrice: MESSAGES['searchTutor.minPrice'],
  };

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.tutorFiltersService.reset$
      .pipe(
        tap(() => {
          this.selectedMinPrice$.next(0);
          this.selectedMaxPrice$.next(100);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  onMoveSliderMinPrice(price: MatSliderChange): void {
    this.selectedMinPrice$.next(price.value);
  }

  onChangeMinPrice(price: MatSliderChange): void {
    this.changePriceMin.emit(price.value);
  }

  onMoveSliderMaxPrice(price: MatSliderChange): void {
    this.selectedMaxPrice$.next(this.maxPrice - price.value);
  }

  onChangeMaxPrice(price: MatSliderChange): void {
    this.changePriceMax.emit(this.maxPrice - price.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
