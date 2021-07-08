import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'
import{HttpClientModule}from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingDocumentComponent } from './component/landing-document/landing-document.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AuthSMSComponent } from './component/auth-sms/auth-sms.component';
import { AuthImgComponent } from './component/auth-img/auth-img.component';
import { Questionnaire1Component } from './component/questionnaire1/questionnaire1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Questionnaire2Component } from './component/questionnaire2/questionnaire2.component';
import { Questionnaire3Component } from './component/questionnaire3/questionnaire3.component';
import { QuestionnaireDoneComponent } from './component/questionnaire-done/questionnaire-done.component';
import { TestfileComponent } from './component/testfile/testfile.component';
import { environment } from "../environments/environment";
import { LogInComponent } from './component/log-in/log-in.component';
import { AdminComponent } from './component/admin/admin.component';
import { SupervisorComponent } from './component/supervisor/supervisor.component';
import { TableComponent } from './component/table/table.component';
import { CreateTestComponent } from './component/create-test/create-test.component';
import { InternComponent } from './component/intern/intern.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingDocumentComponent,
    SignInComponent,
    AuthSMSComponent,
    AuthImgComponent,
    Questionnaire1Component,
    Questionnaire2Component, 
    Questionnaire3Component,
    QuestionnaireDoneComponent,
    TestfileComponent,
    LogInComponent,
    AdminComponent,
    SupervisorComponent,
    TableComponent,
    CreateTestComponent,
    InternComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
