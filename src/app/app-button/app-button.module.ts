import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppButtonComponent } from './app-button.component';

@NgModule({
  declarations: [AppButtonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [AppButtonComponent],
})
export class AppButtonModule {}
