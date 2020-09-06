import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SubjectsComponent } from './subjects.component';
import { AvatarModule } from '../app-avatar';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [HomeComponent, MapComponent, SubjectsComponent],
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
