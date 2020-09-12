import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function PasswordPatternValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    console.log(control.value);
    console.log(control.value.match(PASSWORD_PATTERN));
    const message = PASSWORD_PATTERN.test(control.value) ? null : { passwordPattern: true };
    return of(message);
  };
}

function PasswordMatchValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const message = control.value ? null : { passwordMatch: true };
    return of(message);
  };
}

export const passwordValidators = [PasswordPatternValidator()];
export const repeatPasswordValidators = [PasswordPatternValidator(), PasswordMatchValidator()];
