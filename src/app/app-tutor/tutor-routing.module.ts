import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SearchTutorComponent } from './search-tutor.component';
import { TutorDetailsComponent } from './details/tutor-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search-tutor',
        component: SearchTutorComponent,
      },
      {
        path: 'tutor-details/:id',
        component: TutorDetailsComponent,
        loadChildren: () =>
          import('./details/tutor-details.module').then(mod => mod.TutorDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorRoutingModule {}
