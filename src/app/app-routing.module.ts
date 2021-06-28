import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AuthImgComponent } from './component/auth-img/auth-img.component';
import { AuthSMSComponent } from './component/auth-sms/auth-sms.component';
import { LandingDocumentComponent } from './component/landing-document/landing-document.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { QuestionnaireDoneComponent } from './component/questionnaire-done/questionnaire-done.component';
import { Questionnaire1Component } from './component/questionnaire1/questionnaire1.component';
import { Questionnaire2Component } from './component/questionnaire2/questionnaire2.component';
import { Questionnaire3Component } from './component/questionnaire3/questionnaire3.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SupervisorComponent } from './component/supervisor/supervisor.component';
import { TestfileComponent } from './component/testfile/testfile.component';

const routes: Routes = [
  {path:'', component:LandingDocumentComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'authSMS/:name' ,component:AuthSMSComponent},
  {path:'authSMS' ,component:AuthSMSComponent},
  {path:'authIMG' ,component:AuthImgComponent},
  {path:'Questionnaire1' ,component: Questionnaire1Component},
  {path:'Questionnaire1/2' ,component: Questionnaire2Component},
  {path:'Questionnaire1/2/3' ,component: Questionnaire3Component},
  {path:'Questionnaire1/2/3/done' ,component: QuestionnaireDoneComponent},
  {path:'test' ,component: TestfileComponent},
  {path:'logIn' ,component: LogInComponent},
  {path:'admin/create/:id/:password' ,component: AdminComponent},
  {path:'admin/login/:id/:password' ,component: AdminComponent},
  {path:'Supervisor' ,component: SupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
