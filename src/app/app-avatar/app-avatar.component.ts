import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div class="avatar">
      <mat-icon *ngIf="icon" class="avatar-icon">{{ icon }}</mat-icon>
      <p *ngIf="message" class="avatar-message">{{ message }}</p>
    </div>
  `,
  styleUrls: ['./app-avatar.component.scss'],
})
export class AvatarComponent {
  @Input() message: string | undefined;
  @Input() icon: string | undefined;
}
