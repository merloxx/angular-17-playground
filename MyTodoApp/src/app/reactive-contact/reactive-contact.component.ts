import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'app-reactive-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-contact.component.html',
  styleUrl: './reactive-contact.component.scss'
})
export class ReactiveContactComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  formBuilder = inject(NonNullableFormBuilder);
  personFormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    company: ['', Validators.required],
    age: '',
    power: ['', Validators.required],
    password: ['', Validators.required],
    passwordRepeat: ['', Validators.required],
  });
  submitted: boolean = false;

  ngOnInit() {
    this.personFormGroup.controls.company.valueChanges.pipe(
      filter((value) => value.toLocaleLowerCase().includes('evil-corp'))
    ).subscribe(() => {
      this.personFormGroup.controls.company.setErrors({ company: 'Nachrichten von Personen aus dieser Firma akzeptieren wir nicht!'});
    })

    combineLatest([
      this.personFormGroup.controls.password.valueChanges,
      this.personFormGroup.controls.passwordRepeat.valueChanges
    ]).pipe(
      map(([password, passwordRepeat]) => password === passwordRepeat),
    ).subscribe((passwordMatch) => {
      if (passwordMatch && this.personFormGroup.controls.passwordRepeat.value !== '') {
        this.personFormGroup.controls.passwordRepeat.setErrors(null);
      } else {
        this.personFormGroup.controls.passwordRepeat.setErrors({ "password-repeat": 'Passwörter stimmen nicht überein!'});
      }     
    });
  }
  
  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.personFormGroup.value);
  }
}
