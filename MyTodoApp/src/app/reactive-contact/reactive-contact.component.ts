import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { ValidationService } from '../validation.service';

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
  validationService = inject(ValidationService);
  personFormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    company: ['', Validators.required],
    age: '',
    power: ['', Validators.required],
    password: ['', Validators.required],
    passwordRepeat: ['', Validators.required],
  }, {
    validators: this.validationService.passwordsMatch('password', 'passwordRepeat')
  });
  submitted: boolean = false;

  ngOnInit() {
    this.personFormGroup.controls.company.valueChanges.pipe(
      filter((value) => value.toLocaleLowerCase().includes('evil-corp'))
    ).subscribe(() => {
      this.personFormGroup.controls.company.setErrors({ company: 'Nachrichten von Personen aus dieser Firma akzeptieren wir nicht!'});
    })
  }
  
  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.personFormGroup.value);
  }
}
