import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppAuthorizationModule } from '../app-authorization';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppButtonModule } from '../app-button';
import { AppShellComponent } from './app-shell.component';
import { AppShellRoutingModule } from './app-shell.routing';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../app-footer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [AppShellComponent, RootComponent, AppBarComponent],
  imports: [
    AppButtonModule,
    AppAuthorizationModule,
    AppShellRoutingModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FooterModule,
  ],
  exports: [AppShellComponent],
})
export class AppShellModule {
  static forRoot(): ModuleWithProviders<AppShellModule> {
    return {
      ngModule: AppShellModule,
      providers: [],
    };
  }
}
