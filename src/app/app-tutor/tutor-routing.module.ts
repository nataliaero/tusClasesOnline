import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTutorComponent } from './search-tutor.component';
import { TutorDashboardComponent } from './tutor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search-tutor',
        component: SearchTutorComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'tutor-dashboard',
        component: TutorDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorRoutingModule {}
