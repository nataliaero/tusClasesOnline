import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DegreeType, SubjectLevels, Tutor } from '../types';

import { MESSAGES } from '../../../messages';

@Component({
  selector: 'app-tutor-details-about',
  template: `
    <div *ngIf="tutor" class="tutor-details-about-the-tutor">
      <h2 class="tutor-details-content-title">{{ msg.aboutTheTutor }}</h2>
      <p>{{ tutor.descriptionLong }}</p>
      <div class="tutor-video">
        <video controls controlsList="nodownload" disablePictureInPicture>
          <source [src]="tutor.video" type="video/mp4" />
          {{ msg.videoNotSupported }}
        </video>
      </div>

      <div class="tutor-details-separator"></div>
      <h2 class="tutor-details-content-title">{{ msg.subjects }}</h2>
      <div *ngFor="let el of tutor.subjects" class="tutor-details-subjects">
        <div>
          <mat-icon>chevron_right</mat-icon>
          <span>{{ el.subject }}</span>
        </div>
        <p>{{ getLevels(el.levels) }}</p>
      </div>

      <div class="tutor-details-separator"></div>
      <h2 class="tutor-details-content-title">{{ msg.speaks }}</h2>
      <div *ngFor="let el of tutor.speaks" class="tutor-details-speaks">
        <div>
          <mat-icon>chevron_right</mat-icon>
          <span>{{ el.language }}</span>
        </div>
        <p>{{ el.level }}</p>
      </div>

      <div class="tutor-details-separator"></div>
      <h2 class="tutor-details-content-title">{{ msg.certifications }}</h2>
      <div *ngFor="let el of tutor.degrees" class="tutor-details-degrees">
        <div>
          <mat-icon>chevron_right</mat-icon>
          <span>{{ getDegree(el.title) }}</span>
        </div>
        <p>{{ el.description }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./tutor-details-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorDetailsAboutComponent {
  @Input() tutor: Tutor;

  msg = {
    aboutTheTutor: MESSAGES['tutor.aboutTheTutor'],
    subjects: MESSAGES['tutor.subjects'],
    speaks: MESSAGES['tutor.speaks'],
    preschool: MESSAGES['tutor.preschool'],
    primary: MESSAGES['tutor.primary'],
    secondary: MESSAGES['tutor.secondary'],
    superior: MESSAGES['tutor.superior'],
    university: MESSAGES['tutor.university'],
    adults: MESSAGES['tutor.adults'],
    certifications: MESSAGES['tutor.certifications'],
    master: MESSAGES['tutor.master'],
    degree: MESSAGES['tutor.degree'],
    undegraduateDegree: MESSAGES['tutor.undegraduateDegree'],
    certificate: MESSAGES['tutor.certificate'],
    doctorate: MESSAGES['tutor.doctorate'],
    other: MESSAGES['tutor.other'],
  };

  LEVELS_MAP: Record<SubjectLevels, string> = {
    [SubjectLevels.Preschool]: this.msg.preschool,
    [SubjectLevels.Primary]: this.msg.primary,
    [SubjectLevels.Secondary]: this.msg.secondary,
    [SubjectLevels.Superior]: this.msg.superior,
    [SubjectLevels.University]: this.msg.university,
    [SubjectLevels.Adults]: this.msg.adults,
  };

  DEGREES_MAP: Record<DegreeType, string> = {
    [DegreeType.Master]: this.msg.master,
    [DegreeType.Degree]: this.msg.degree,
    [DegreeType.UndergradutaeDegree]: this.msg.undegraduateDegree,
    [DegreeType.Certificate]: this.msg.certificate,
    [DegreeType.Doctorate]: this.msg.doctorate,
    [DegreeType.Other]: this.msg.other,
  };

  getLevels(levels: SubjectLevels[]): string {
    levels.map(level => this.LEVELS_MAP[level]).join(',');
    return levels.map(level => this.LEVELS_MAP[level]).join(', ');
  }

  getDegree(degree: DegreeType): string {
    return this.DEGREES_MAP[degree];
  }

  getTutorName(name: string, firstSurname: string): string {
    return `${name} ${firstSurname[0]}.`;
  }
}
