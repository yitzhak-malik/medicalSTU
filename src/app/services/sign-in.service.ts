import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InternModel,loginModel } from '../interfaces/intern-model';
import { HttpServicService } from './http-servic.service';


@Injectable({
  providedIn: 'root'
})
export class SignInService {
  intern:InternModel={
    id:'',
    name:'',
    passport:'',
    tel:0
  };
  user:loginModel={
    }

  constructor(private http:HttpServicService,private router:Router) {
  
   }
  rgisterLevelOne(user:InternModel){
     this.intern=user;
     this.http.httpAuth(user).subscribe(user=>{
      if(user._id) {
        this.user._id=user._id
        this.router.navigate(['/authSMS'])
     }
     
    })

  }
}
