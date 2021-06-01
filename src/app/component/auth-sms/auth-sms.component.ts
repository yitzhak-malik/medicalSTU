import { Component, ElementRef, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interfaces/intern-model';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-auth-sms',
  templateUrl: './auth-sms.component.html',
  styleUrls: ['./auth-sms.component.css']
})
export class AuthSMSComponent implements OnInit {
 code:string[]=[];
 intern:InternModel;
  constructor(private signInService:SignInService,private e:ElementRef) {
     this.intern=signInService.intern
     this.e.nativeElement.focus()
   }

  ngOnInit(): void {
  }

}
