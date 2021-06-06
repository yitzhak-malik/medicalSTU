import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'
import{HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingDocumentComponent } from './component/landing-document/landing-document.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AuthSMSComponent } from './component/auth-sms/auth-sms.component';
import { AuthImgComponent } from './component/auth-img/auth-img.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingDocumentComponent,
    SignInComponent,
    AuthSMSComponent,
    AuthImgComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
