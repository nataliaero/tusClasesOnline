import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../../../messages';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from '../tutor.service';
import { switchMap } from 'rxjs/operators';
import { AppBarService } from '../../../services';

@Component({
  selector: 'app-tutor-details',
  template: `
    <app-tutor-details-header [tutor]="tutor$ | async"></app-tutor-details-header>

    <div *ngIf="tutor$ | async as tutor" class="tutor-details-content">
      <div class="tutor-details-about-the-tutor">
        <h2 class="tutor-details-content-title">Sobre el tutor</h2>
        <p>{{ tutor.descriptionLong }}</p>
        <div class="tutor-details-separator"></div>
        <h2 class="tutor-details-content-title">Materias</h2>
        <div *ngFor="let el of tutor.subjects" class="tutor-details-subjects">
          <div>
            <mat-icon>chevron_right</mat-icon>
            <span>{{ el.subject }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tutor-details.component.scss'],
})
export class TutorDetailsComponent implements OnInit {
  constructor(
    private appBarService: AppBarService,
    private route: ActivatedRoute,
    private tutorService: TutorService,
  ) {}

  rateIcon = 'star';
  ratingsIcon = 'equalizer';
  RATE_HOUR = '€/h';

  tutor$ = this.route.paramMap.pipe(
    switchMap(params => this.tutorService.getTutor(params.get('id'))),
  );

  msg = {
    findIdealTutor: MESSAGES['searchTutor.findIdealTutor'],
    filtersTip: MESSAGES['searchTutor.filtersTip'],
    readMore: MESSAGES['searchTutor.readMore'],
    fee: MESSAGES['searchTutor.fee'],
    ratings: MESSAGES['tutor.ratings'],
    whatToLearn: MESSAGES['searchTutor.whatToLearn'],
    lookKeyWord: MESSAGES['searchTutor.lookKeyWord'],
    lookKeyWordPlaceholder: MESSAGES['searchTutor.lookKeyWordPlaceholder'],
    priceRange: MESSAGES['searchTutor.priceRange'],
    availability: MESSAGES['searchTutor.availability'],
    weekends: MESSAGES['searchTutor.weekends'],
    speaks: MESSAGES['searchTutor.speaks'],
    sortBy: MESSAGES['searchTutor.sortBy'],
  };

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }

  ngOnInit(): void {
    this.appBarService.updateStyle(true);
  }
}
