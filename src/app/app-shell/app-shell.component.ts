import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <app-bar></app-bar>
    <main class="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {
  constructor() {}
}
