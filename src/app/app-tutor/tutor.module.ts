import { FilterDialogComponent, SearchTutorComponent } from './search-tutor.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AppButtonModule } from '../app-button';
import { AppDialogModule } from '../app-dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { TutorCardActionsComponent } from './card';
import { TutorCardComponent } from './card';
import { TutorFiltersModule } from './filters';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorService } from './tutor.service';

@NgModule({
  declarations: [
    FilterDialogComponent,
    SearchTutorComponent,
    TutorCardComponent,
    TutorCardActionsComponent,
  ],
  imports: [
    AppButtonModule,
    AppDialogModule,
    CommonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    TutorFiltersModule,
    TutorRoutingModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    {
      provide: MatDialogRef,
      useValue: {},
    },
    TutorService,
  ],
})
export class TutorModule {}
