import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  message:string;
  constructor(private signInService:SignInService, private router:Router) { }

  ngOnInit(): void {
  }
  logIn(name){
   
    
   this.signInService.logIn(name).subscribe(()=>{
    
   this.router.navigate([`/authSMS/${name}`]);
   },err=>{
    console.log(err);
    
     
   this.message=err.message
   }) 
  }

}
