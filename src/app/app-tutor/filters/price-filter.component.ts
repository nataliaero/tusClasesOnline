import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MESSAGES } from '../../../messages';
import { combineLatest, Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { MatSliderChange } from '@angular/material/slider';
import { TutorFiltersService } from './tutor-filters.service';
import { isNil } from 'lodash-es';

@Component({
  selector: 'app-price-filter',
  template: `
    <div class="price-filter">
      <h4>{{ msg.minPrice }}</h4>
      <mat-slider
        class="price-filter-slider"
        tabIndex="-1"
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
        tabIndex="-1"
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceFilterComponent implements OnInit, OnDestroy {
  constructor(private tutorFiltersService: TutorFiltersService) {}
  @Input() previousMinPrice = 0;
  @Input() previousMaxPrice = 100;
  @Output() changePriceMin = new EventEmitter<number>();
  @Output() changePriceMax = new EventEmitter<number>();

  minPrice = 0;
  maxPrice = 100;

  selectedMinPrice$ = new BehaviorSubject<number>(0);
  selectedMaxPrice$ = new BehaviorSubject<number>(100);

  priceRange$: Observable<string> = combineLatest([
    this.selectedMinPrice$,
    this.selectedMaxPrice$,
  ]).pipe(
    map(
      ([selectedMinPrice, selectedMaxPrice]) => `${selectedMinPrice}€/h - ${selectedMaxPrice}€/h`,
    ),
    startWith(`${this.previousMinPrice}€/h - ${this.previousMaxPrice}€/h`),
  );

  msg = {
    maxPrice: MESSAGES['searchTutor.maxPrice'],
    minPrice: MESSAGES['searchTutor.minPrice'],
  };

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.selectedMinPrice$.next(isNil(this.previousMinPrice) ? 0 : this.previousMinPrice);
    this.selectedMaxPrice$.next(isNil(this.previousMaxPrice) ? 100 : this.previousMaxPrice);

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
