import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingDocumentComponent } from './component/landing-document/landing-document.component';
import { SignInComponent } from './component/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingDocumentComponent,
    SignInComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
