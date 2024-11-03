import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { TiteComponent } from './tite/tite.component';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    FormsModule  ,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AppComponent,
    Section1Component,
    TiteComponent
  ],
  providers: [],

})
export class AppModule { }
