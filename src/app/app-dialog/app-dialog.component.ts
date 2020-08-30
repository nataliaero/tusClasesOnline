import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <button mat-dialog-close mat-icon-button class="close-button" tabIndex="-1">
      <mat-icon>{{ cancelIcon }}</mat-icon>
    </button>
    <div mat-dialog-title>
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="divider"></div>
    <mat-dialog-content class="content">
      <ng-content></ng-content>
    </mat-dialog-content>
  `,
  styleUrls: ['./app-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDialogComponent {
  @Input() title: string;

  cancelIcon = 'close';
}
