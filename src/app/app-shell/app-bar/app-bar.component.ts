import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
    <div class="app-bar">
      <div class="app-bar-left">
        <img src="/assets/logoWhite.png" alt="Logo" />
        <p>TusClasesOnline</p>
      </div>
      <div class="app-bar-right">
        <mat-icon>search</mat-icon>
        <p>Encuentra un tutor</p>
        <mat-icon>school</mat-icon>
        <p>Convi&eacute;rtete en tutor</p>
        <mat-icon>person_24</mat-icon>
        <p>Entrar</p>
      </div>
    </div>
  `,
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {}
