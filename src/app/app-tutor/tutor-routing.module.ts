import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTutorComponent } from './search-tutor.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorRoutingModule {}
