import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCompanyValidator]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CompanyValidatorDirective),
    multi: true
  }]
})
export class CompanyValidatorDirective implements Validator {

  validate(control: FormControl): ValidationErrors | null {
    const value = control.value as string;
    const invalid = value.toLowerCase().includes('evil-corp');

    if (invalid) {
      return {
        'wrong-company': 'Nachrichten von Personen aus dieser Firma akzeptieren wir nicht!'
      }  
    }

    return null;
  }
}
