import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PreloadModulesStrategy } from './preload';
import { RootComponent } from './app-shell/root.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RootComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadModulesStrategy,
      scrollPositionRestoration: 'enabled', // or 'top'
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64], // [x, y] - adjust scroll offset
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
