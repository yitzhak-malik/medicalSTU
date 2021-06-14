import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 authName;
 red:boolean=false
 green:boolean=false
  constructor(private signInService:SignInService, private router:Router,activatedRoute:ActivatedRoute ) {
     this.intern=this.signInService.intern
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation= 'reload';

     activatedRoute.paramMap.subscribe(Rpar=> this.authName=Rpar.get('name'))
     
     
  }

  ngOnInit(): void {
  }
  chekc(event:any){
  if(+event.srcElement.value + 1 >= 1 && +event.srcElement.value + 1 <= 10 ){
    let element;
    if (event.code !== 'Backspace'){
      element = event.srcElement.nextElementSibling;
      if(element ==null){
                this.signInService.user.code =this.code.join('');
                if(this.authName){
                  this.signInService.loginWithCodeSms().subscribe(user=>{
                    this.green=true;
                     setTimeout( ()=>this.router.navigate(['']),1000)
                   },error => {
                     this.red=true;
                     setTimeout( ()=>this.router.navigate([`/authSMS/${this.authName}`]),1000)
                   }
                   )
                }
                if(!this.authName){
                  this.signInService.rgisterWithCodeSms().subscribe(user=>{
                    this.green=true;
                     setTimeout( ()=>this.router.navigate(['/authIMG']),1000)
                   },error => {
                     this.red=true;
                     setTimeout( ()=>this.router.navigate(['/authSMS']),1000)
                   }
                   )
                }
      }

    }
      
      if (event.code === 'Backspace')

         element = event.srcElement.previousElementSibling;
 
     if(element == null)
         return;
     else
         element.focus();
  }else{
    event.srcElement.value=""
  }
     
  }




  // chekc(event:KeyboardEvent){
  //   let thisEvent=event.target as HTMLInputElement
  //   if(+thisEvent.value + 1 >= 1 && +thisEvent.value + 1 <= 10 ){
  //     let element;
  //     if (event.code !== 'Backspace'){
  //       element = thisEvent.nextElementSibling;
  //       if(element ==null){
  //         this.signInService.user.code =this.code.join('');
  //         return this.signInService.rgisterWithCodeSms()
  //       }
  //     }
        
  //       if (event.code === 'Backspace')
  
  //          element = thisEvent.previousElementSibling;
   
  //      if(element == null)
  //          return;
  //      else
  //        console.log( );
          
  //   }else{
  //     thisEvent.value=""
  //   }
       
  
  //   }
  
}
