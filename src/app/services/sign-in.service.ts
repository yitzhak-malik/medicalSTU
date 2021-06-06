import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InternModel,loginModel } from '../interfaces/intern-model';
import { HttpServicService } from './http-servic.service';
import {tap}from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  intern:InternModel={
    id:'',
    fullName:'',
    passport:'',
    tel:0
  };
  user:loginModel={
    }

  constructor(private http:HttpServicService,private router:Router) {
  
   }
  rgisterLevelOne(user:InternModel){
     this.intern=user;
     this.http.httpPost<InternModel,loginModel>('/auth/chekUser',this.intern).subscribe(user=>{
      if(user._id) {
        this.user._id=user._id
        this.router.navigate(['/authSMS'])
        console.log(user);
        
     }
     
    },error=>{
      console.log(error.error);
      alert(error.error)
     
    })

  }
  rgisterWithCodeSms():Observable<any>{
   return this.http.httpPost<loginModel,any>('/auth/chekCode',this.user)
    
    
    
  } 
}
