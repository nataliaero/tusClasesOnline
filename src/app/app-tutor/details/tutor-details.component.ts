import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from '../tutor.service';
import { switchMap } from 'rxjs/operators';
import { AppBarService } from '../../../services';

@Component({
  selector: 'app-tutor-details',
  template: `
    <app-tutor-details-header [tutor]="tutor$ | async"></app-tutor-details-header>
    <app-tutor-details-about [tutor]="tutor$ | async" ></app-tutor-details-about>
  `,
  styleUrls: ['./tutor-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorDetailsComponent implements OnInit {
  constructor(
    private appBarService: AppBarService,
    private route: ActivatedRoute,
    private tutorService: TutorService,
  ) {}


  tutor$ = this.route.paramMap.pipe(
    switchMap(params => this.tutorService.getTutor(params.get('id'))),
  );


  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }
}
