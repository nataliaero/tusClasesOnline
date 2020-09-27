import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { AppBarService } from 'src/services';
import { MESSAGES } from '../../messages';
import { TUTORS } from './tutors';
import { MobileService } from '../../services';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TutorFilter } from './types';
import { INITIAL_FILTERS } from './filters/tutor-filters.component';
import { SearchTutorService } from './search-tutor.service';

type Nil = undefined | null;

@Component({
  selector: 'app-filter-dialog',
  template: `
    <app-dialog>
      <app-tutor-filters
        class="search-tutor-filters-dialog"
        [value]="this.selectedFilters$ | async"
        (changeFilter)="onChangeFilters($event)"
      ></app-tutor-filters>
    </app-dialog>
  `,
  styleUrls: ['./search-tutor.component.scss'],
})
export class FilterDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    private searchTutorService: SearchTutorService,
  ) {}

  private selectedFilters: TutorFilter;
  selectedFilters$ = this.searchTutorService.selectedFilters$;

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(() => this.selectedFilters$.next(this.selectedFilters));
  }

  onChangeFilters(selectedFilters: TutorFilter): void {
    this.selectedFilters = selectedFilters;
  }
}

@Component({
  selector: 'app-search-tutor',
  template: `
    <div class="search-tutor">
      <div class="search-tutor-title">
        <h2>{{ msg.findIdealTutor }}</h2>
        <h2 class="search-tutor-title-middle">-</h2>
        <h2 class="search-tutor-title-right">{{ msg.filtersTip }}</h2>
        <div *ngIf="isMobileOrTablet$ | async" (click)="onOpenFiltersDialog()">
          <mat-icon>menu</mat-icon>
        </div>
      </div>

      <div class="search-tutor-body">
        <div class="search-tutor-cards">
          <app-tutor-card *ngFor="let tutor of tutors" [tutor]="tutor"></app-tutor-card>
        </div>
        <app-tutor-filters class="search-tutor-filters"></app-tutor-filters>
      </div>
    </div>
  `,
  styleUrls: ['./search-tutor.component.scss'],
})
export class SearchTutorComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TutorFilter,
    private appBarService: AppBarService,
    private matDialog: MatDialog,
    private mobileService: MobileService,
    private searchTutorService: SearchTutorService,
  ) {}

  isMobileOrTablet$: Observable<boolean> = this.mobileService.isMobileOrTablet$;
  isMobile$: Observable<boolean> = this.mobileService.isMobile$;
  tutors = TUTORS;

  msg = {
    findIdealTutor: MESSAGES['searchTutor.findIdealTutor'],
    filtersTip: MESSAGES['searchTutor.filtersTip'],
  };

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }

  onOpenFiltersDialog(): Subscription {
    return this.openFilterDialog(this.searchTutorService.selectedFilters$.value)
      .pipe(take(1))
      .subscribe();
  }

  private openFilterDialog(data: TutorFilter): Observable<void> {
    return this.matDialog
      .open(FilterDialogComponent, {
        width: '100vw',
        maxWidth: '100vw',
        height: '100vh',
        data,
      })
      .afterClosed();
  }

  ngOnDestroy(): void {
    this.searchTutorService.destroy();
  }
}
