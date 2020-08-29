import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <div mat-dialog-title>
      <h2>{{ title }}</h2>
    </div>
    <button mat-dialog-close mat-icon-button class="close-button">
      <mat-icon>{{ cancelIcon }}</mat-icon>
    </button>
    <mat-dialog-content>
      <ng-content></ng-content>
    </mat-dialog-content>
  `,
  styleUrls: ['./app-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDialogComponent {
  @Input() title: string;

  cancelIcon = 'cancel';
}
