import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="section">
      <app-avatar *ngIf="icon" class="section-avatar" [icon]="icon"></app-avatar>
      <div *ngIf="title" class="section-title">{{ title }}</div>
      <h2 *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</h2>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() icon: string | undefined;
}
