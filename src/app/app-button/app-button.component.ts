import { Component, Input } from '@angular/core';

type Nil = undefined | null;

@Component({
  selector: 'app-button',
  template: `
    <div class="click-user">
      <mat-icon *ngIf="icon" class="button-icon" [style.color]="color" [style.fontSize]="iconSize">
        {{ icon }}
      </mat-icon>
      <p *ngIf="message" class="button-message" [style.color]="color" [style.fontSize]="fontSize">
        {{ message }}
      </p>
    </div>
  `,
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent {
  /**
   * Button message
   */
  @Input() message: string | Nil;

  /**
   * Icon name
   */
  @Input() icon: string | Nil;

  /**
   * Color of the icon and the text inside the button
   */
  @Input() color = '#ffffff';

  /**
   * Size font of the message
   */
  @Input() fontSize = '16px';

  /**
   * Size font of the icon
   */
  @Input() iconSize = '20px';
}
