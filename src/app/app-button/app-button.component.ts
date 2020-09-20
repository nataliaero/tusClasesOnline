import { Component, Input } from '@angular/core';
import { Nil } from '../shared';

@Component({
  selector: 'app-button',
  template: `
    <div class="click-user">
      <mat-icon *ngIf="icon" class="button-icon" [style.color]="color">{{ icon }}</mat-icon>
      <p *ngIf="message" class="button-message" [style.color]="color">{{ message }}</p>
    </div>
  `,
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent {
  @Input() message: string | Nil;
  @Input() icon: string | Nil;

  /**
   * Color of the icon and the text inside the button
   */
  @Input() color = '#ffffff';
}
