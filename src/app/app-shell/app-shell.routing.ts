import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { PreloadModulesStrategy } from '../preload';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'tutor',
        loadChildren: () => import('../app-tutor/tutor.module').then(mod => mod.TutorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [PreloadModulesStrategy],
  exports: [RouterModule],
})
export class AppShellRoutingModule {}
