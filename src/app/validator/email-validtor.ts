import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      // If the control is empty, consider it valid (use required validator for mandatory check)
      return null;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(control.value)) {
      // If the value doesn't match the email pattern, return a custom error
      return { customEmail: true };
    }

    // If the email is valid, return null
    return null;
  };
}
