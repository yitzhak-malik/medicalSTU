import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interfaces/intern-model';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-auth-img',
  templateUrl: './auth-img.component.html',
  styleUrls: ['./auth-img.component.css']
})
export class AuthImgComponent implements OnInit {
user:InternModel;

  constructor(private signin:SignInService) { 
    this.user=signin.intern;
  }

  ngOnInit(): void {

  }
  next(){
    this.signin.rgisterEND()

  }

}
