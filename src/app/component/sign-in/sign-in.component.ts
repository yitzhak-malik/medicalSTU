import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interfaces/intern-model';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  intern:InternModel;
  constructor(private login:SignInService) { 
    this.intern={
      id:'',
      fullName:'',
      passport:'',
      phoneNumber:''
    }
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.login.rgisterLevelOne(this.intern)
  }

}
