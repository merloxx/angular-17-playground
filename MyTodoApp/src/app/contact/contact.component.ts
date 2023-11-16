import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyValidatorDirective } from '../company-validator.directive';

interface Person {
  name: string;
  company: string;
  age?: number;
  power: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, CompanyValidatorDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']
  person: Person = {
    name: '',
    company: '',
    power: ''
  }
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.person);
  }
}
