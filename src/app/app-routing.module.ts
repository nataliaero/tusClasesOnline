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
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
