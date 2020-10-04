import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTutorComponent } from './search-tutor.component';
import { TutorDetailsComponent } from './tutor-details.component';

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
        path: 'tutor-details/:id',
        component: TutorDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorRoutingModule {}
