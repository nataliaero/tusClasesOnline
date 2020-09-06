import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from './app-avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
