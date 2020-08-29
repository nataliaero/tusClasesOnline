import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="click-user" (click)="onClickUser()">
      <mat-icon class="button-icon">{{ icon }}</mat-icon>
      <p class="button-message">{{ message }}</p>
    </div>
  `,
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent {
  @Input() message: string;
  @Input() icon: string;
  @Input() callback: () => void;

  onClickUser(): void {
    console.log('click');
    this.callback();
  }
}
