import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppShellComponent } from './app-shell.component';
import { AppShellRoutingModule } from './app-shell.routing';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [AppShellComponent, RootComponent],
  imports: [AppShellRoutingModule, CommonModule],
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
