import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from './body/body.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { TiteComponent } from './tite/tite.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent,BodyComponent,Section1Component,Section2Component,TiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';
  heroTitle: string = 'Welcome to our realm of dark fantasy and relentless battles.';
  heroDescription: string = 'Join us in the journey through blood-soaked battles and emotional turmoil. No trial, just immerse yourself in the experience today.';
  submitButtonText: string = 'Submit';
  submitButtonColor: string = '#A00000';
  submitButtonTextColor: string = 'white';

  handleEmailSubmission(email: string) {
    console.log('Submitted email:', email);
}



}
