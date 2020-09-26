import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { SortByType } from '../types';
import { MESSAGES } from '../../../messages';

@Component({
  selector: 'app-sort-by-filter',
  template: `
    <div class="sort-by-filter" [matMenuTriggerFor]="menu">
      <div class="sort-by-filter-left">
        <mat-icon>sort</mat-icon>
        <span>{{ msg.sortBy }}</span>
      </div>
      <mat-icon>arrow_drop_down</mat-icon>
    </div>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="onClick('popularity')">
        <span>{{ msg.popularity }}</span>
      </button>
      <button mat-menu-item (click)="onClick('priceMin')">
        <span>{{ msg.priceMin }}</span>
      </button>
      <button mat-menu-item (click)="onClick('priceMax')">
        <span>{{ msg.priceMax }}</span>
      </button>
      <button mat-menu-item (click)="onClick('rating')">
        <span>{{ msg.rating }}</span>
      </button>
    </mat-menu>
  `,
  styleUrls: ['./sort-by-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortByFilterComponent {
  @Output() selectSortBy = new EventEmitter<SortByType>();

  msg = {
    sortBy: MESSAGES['searchTutor.sortBy.title'],
    popularity: MESSAGES['searchTutor.sortBy.popularity'],
    priceMax: MESSAGES['searchTutor.sortBy.priceMax'],
    priceMin: MESSAGES['searchTutor.sortBy.priceMin'],
    rating: MESSAGES['searchTutor.sortBy.rating'],
  };

  onClick(selected: SortByType): void {
    this.selectSortBy.emit(selected);
  }
}
