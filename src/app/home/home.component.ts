import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../../messages';
import { FormGroup, FormControl } from '@angular/forms';
import { AppBarService, MobileService } from '../../services';
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
              {{ msg.findTutor }}
            </ng-template>
          </button>
        </div>
      </div>
    </div>
    <div class="main-body">
      <app-subjects></app-subjects>
      <app-map></app-map>
      <app-section [title]="msg.firstClassTitle" [icon]="iconFirstClass">
        <h2 class="first-class-body">{{ msg.firstClassBody }}</h2>
      </app-section>
      <app-steps></app-steps>
      <app-tutor-info></app-tutor-info>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private appBarService: AppBarService, private mobileService: MobileService) {}

  isMobileOrTablet$: Observable<boolean> = this.mobileService.isMobileOrTablet$;
  iconFirstClass = 'thumb_up';

  msg = {
    findTutor: MESSAGES['basic.findTutor'],
    findBestTutors: MESSAGES['home.findBestTutors'],
    startToday: MESSAGES['home.startToday'],
    searchQuestion: MESSAGES['home.searchQuestion'],
    firstClassTitle: MESSAGES['home.firstClassTitle'],
    firstClassBody: MESSAGES['home.firstClass'],
  };

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('', []),
  });

  ngOnInit(): void {
    this.appBarService.updateStyle(false);
  }

  get searchFormControl(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  onSearch(): void {
    console.log(this.searchFormControl.value);
  }
}
