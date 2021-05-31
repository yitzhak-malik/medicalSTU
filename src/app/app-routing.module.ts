import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSMSComponent } from './component/auth-sms/auth-sms.component';
import { LandingDocumentComponent } from './component/landing-document/landing-document.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [
  {path:'', component:LandingDocumentComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'authSMS' ,component:AuthSMSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
