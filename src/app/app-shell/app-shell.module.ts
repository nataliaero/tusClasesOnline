import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppShellComponent } from './app-shell.component';
import { AppShellRoutingModule } from './app-shell.routing';
import { RootComponent } from './root.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppShellComponent, RootComponent, AppBarComponent],
  imports: [AppShellRoutingModule, CommonModule, MatIconModule],
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
