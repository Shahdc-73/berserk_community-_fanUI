import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  @Input() title: string = 'Welcome to our realm of dark fantasy and relentless battles.';
  @Input() description: string = 'Join us in the journey through blood-soaked battles and emotional turmoil. No trial, just immerse yourself in the experience today.';
  @Input() buttonText: string = 'Submit';
  @Input() buttonColor: string = '#A00000';
  @Input() buttonTextColor: string = 'white';

  @Output() emailSubmitted = new EventEmitter<string>();

  email: string = '';

  submitEmail() {
    if (this.email.trim()) {
      this.emailSubmitted.emit(this.email);
      this.email = ''; // Clear the input field
    }
  }
}
