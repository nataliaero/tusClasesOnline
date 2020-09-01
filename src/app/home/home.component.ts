import { Component } from '@angular/core';
import { MESSAGES } from '../../messages';
import { FormGroup, FormControl } from '@angular/forms';
import { MobileService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <div class="background-image">
      <div class="header-info">
        <h1 class="title">{{ msg.findBestTutors }}</h1>
        <h2 class="subtitle">{{ msg.startToday }}</h2>
        <div class="search-group">
          <form [formGroup]="searchForm">
            <input
              matInput
              class="search-input"
              name="search"
              [formControl]="searchFormControl"
              [placeholder]="msg.searchQuestion"
            />
          </form>
          <button mat-button class="search-button" (click)="onSearch()">
            <mat-icon *ngIf="isMobileOrTablet$ | async; else text">search</mat-icon>
            <ng-template #text>
              {{ msg.searchQuestion }}
            </ng-template>
          </button>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div class="subjects">
        <div class="subject">
          <div><mat-icon>details</mat-icon></div>
          <div><h2>Matemáticas</h2></div>
        </div>
        <div class="subject">
          <mat-icon>filter_vintage</mat-icon>
          <h2>Física</h2>
        </div>
        <div class="subject">
          <mat-icon>create</mat-icon>
          <h2>Lengua</h2>
        </div>
        <div class="subject">
          <mat-icon>laptop</mat-icon>
          <h2>Informática</h2>
        </div>
        <div class="subject">
          <mat-icon>blur_on</mat-icon>
          <h2>Economía</h2>
        </div>
        <div class="subject">
          <mat-icon>spa</mat-icon>
          <h2>Francés</h2>
        </div>
        <div class="subject">
          <mat-icon>publicon</mat-icon>
          <h2>Inglés</h2>
        </div>
        <div class="subject">
          <mat-icon>school</mat-icon>
          <h2>Álgebra</h2>
        </div>
        <div class="subject">
          <mat-icon>exposure</mat-icon>
          <h2>Química</h2>
        </div>
      </div>
      <div></div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private mobileService: MobileService) {}

  searchIcon = 'search';
  isMobileOrTablet$: Observable<boolean> = this.mobileService.isMobileOrTablet$;

  msg = {
    findTutor: MESSAGES['basic.findTutor'],
    findBestTutors: MESSAGES['home.findBestTutors'],
    startToday: MESSAGES['home.startToday'],
    searchQuestion: MESSAGES['home.searchQuestion'],
  };

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('', []),
  });

  get searchFormControl(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  onSearch(): void {
    console.log(this.searchFormControl.value);
  }
}
