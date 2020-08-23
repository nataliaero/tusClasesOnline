import { Component } from '@angular/core';
import { MESSAGES } from '../../messages';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  template: `
    <div class="background-image">
      <div class="main-info">
        <h1 class="title">{{ msg.findBestTutors }}</h1>
        <h2 class="subtitle">{{ msg.startToday }}</h2>
        <div class="search-group">
          <form [formGroup]="searchForm">
            <mat-form-field class="search-form">
              <input
                matInput
                name="search"
                [formControl]="searchFormControl"
                [placeholder]="msg.searchQuestion"
              />
            </mat-form-field>
          </form>
          <button mat-button class="search-button" (click)="onSearch()">
            {{ msg.findTutor }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
