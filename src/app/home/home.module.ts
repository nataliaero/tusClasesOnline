import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from '../app-avatar';
import { MapComponent } from './home-sections/map.component';
import { StepsComponent } from './home-sections/steps.component';
import { SubjectsComponent } from './home-sections/subjects.component';
import { TutorInfoComponent } from './home-sections/tutor-info.component';
import { SectionComponent } from './home-sections/section.component';

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    SectionComponent,
    StepsComponent,
    SubjectsComponent,
    TutorInfoComponent,
  ],
  imports: [
    AvatarModule,
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class HomeModule {}
