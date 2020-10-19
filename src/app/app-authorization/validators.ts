import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

// Between 8 and 15 characters, at least 1 upper case letter, 1 lower case letter, 1 number and 1 special character
// const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

// Between 8 and 15 characters, at least 1 letter, 1 number and 1 special character
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function PasswordPatternValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
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
