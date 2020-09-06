import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div *ngIf="icon" class="avatar">
      <mat-icon class="avatar-icon">{{ icon }}</mat-icon>
    </div>
    <div *ngIf="message" class="avatar avatar-message">
      <p *ngIf="message" class="avatar-message-body">{{ message }}</p>
    </div>
  `,
  styleUrls: ['./app-avatar.component.scss'],
})
export class AvatarComponent {
  @Input() message: string | undefined = undefined;
  @Input() icon: string | undefined = undefined;
}
