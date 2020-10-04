import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDialogComponent, SearchTutorComponent } from './search-tutor.component';
import { TutorFiltersModule } from './filters';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorCardComponent } from './card';
import { TutorCardActionsComponent } from './card';
import { AppButtonModule } from '../app-button';
import { MatIconModule } from '@angular/material/icon';
import { AppDialogModule } from '../app-dialog';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TutorService } from './tutor.service';
import { MatPaginatorModule } from '@angular/material/paginator';

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
