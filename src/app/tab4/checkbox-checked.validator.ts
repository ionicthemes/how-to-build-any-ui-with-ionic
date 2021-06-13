import { ValidatorFn, FormArray } from '@angular/forms';

// this validator checks if we have at least X elements checked inside a FormArray Control
export class CheckboxCheckedValidator {
  static minSelectedCheckboxes(min: number) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);

      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
    return validator;
  }
}
