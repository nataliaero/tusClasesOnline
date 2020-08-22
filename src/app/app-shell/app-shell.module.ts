import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppShellComponent } from './app-shell.component';
import { AppShellRoutingModule } from './app-shell.routing';
import { RootComponent } from './root.component';
import { AppBarModule } from '../app-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppShellComponent, RootComponent],
  imports: [AppBarModule, AppShellRoutingModule, CommonModule, MatIconModule],
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
