import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  passwordsMatch<T>(passwordControlName: string, passwordRepeatControlName: string): ValidatorFn {
    return (formGroup: AbstractControl<T>): ValidationErrors | null => {
      const password = formGroup.get(passwordControlName);
      const passwordRepeat = formGroup.get(passwordRepeatControlName);
  
      if (password?.value === passwordRepeat?.value) {
        delete passwordRepeat?.errors?.['password-repeat'];
      } else if (passwordRepeat?.dirty) {
        return { 'password-repeat': 'Passwörter stimmen nicht überein!' }
      }
  
      return null;
    }
  }
}
