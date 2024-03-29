import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { MESSAGES } from '../../messages';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppAuthorizationService } from './app-authorization.service';

export interface ConfirmDialogData {
  username: string;
}

@Component({
  selector: 'app-confirm-form',
  template: `
    <app-dialog [title]="msg.validateAccount">
      <form novalidate [formGroup]="confirmForm" (ngSubmit)="submit()">
        <div class="confirm-message">{{ msg.code }}</div>
        <mat-form-field class="form-field" appearance="outline">
          <input
            class="input"
            matInput
            name="confirm"
            [formControl]="confirmFormControl"
            tabIndex="-1"
          />
          <mat-error *ngIf="confirmFormControl.hasError('required')">
            {{ msg.mandatoryField }}
          </mat-error>
        </mat-form-field>
        <button
          mat-raised-button
          class="submit-button"
          [disabled]="isConfirmDisabled$ | async"
          tabIndex="-1"
          type="submit"
        >
          {{ msg.validate }}
        </button>
      </form>
    </app-dialog>
  `,
  styleUrls: ['./app-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppConfirmComponent {
  @Output() confirm = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    public dialogRef: MatDialogRef<AppConfirmComponent>,
    private appAuthorizationService: AppAuthorizationService,
  ) {}

  msg = {
    validateAccount: MESSAGES['confirm.validateAccount'],
    code: MESSAGES['confirm.code'],
    validate: MESSAGES['confirm.validate'],
    mandatoryField: MESSAGES['basic.mandatoryField'],
  };

  confirmForm: FormGroup = new FormGroup({
    confirm: new FormControl('', [Validators.required]),
  });

  get confirmFormControl(): FormControl {
    return this.confirmForm.get('confirm') as FormControl;
  }

  isConfirmDisabled$ = this.confirmForm.statusChanges
    .pipe(startWith('INVALID'))
    .pipe(map(formState => formState === 'INVALID'));

  submit(): void {
    if (this.confirmForm.invalid) {
      return;
    }
    this.appAuthorizationService.confirm(this.data.username, this.confirmFormControl.value);
    this.dialogRef.close();
  }
}
