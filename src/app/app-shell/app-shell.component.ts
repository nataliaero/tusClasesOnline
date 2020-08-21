import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {
  constructor() {}
}
