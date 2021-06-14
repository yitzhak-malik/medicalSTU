import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InternModel,loginModel, smsModel } from '../interfaces/intern-model';
import { HttpServicService } from './http-servic.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignInService {
  intern:InternModel={
    id:'',
    fullName:'',
    passport:'',
    phoneNumber:''
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
  rgisterEND(){
    this.http.httpPost<any,any>('/auth/imageAuth',{auth:this.user,user:this.intern}).subscribe(
      user=>{
     console.log(user);

      this.router.navigate(['/Questionnaire1'])
      
      } ,err=>console.log(err)

    )
  }
  logIn(name){
   
    
    console.log(name);
    
    return this.http.httpGet<smsModel>(`/auth/logIn/${name}`).pipe(tap(user=>{
     if(user.intern){
       this.intern=user.intern
     }
     if(user.user){
      this.user=user.user
     }
    }))
  }
  loginWithCodeSms(){
    return this.http.httpPost<loginModel,any>('/auth/chekCode',this.user)
  }
}
