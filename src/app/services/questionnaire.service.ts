import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { questionnaireModel } from '../interfaces/intern-model';
import { HttpServicService } from './http-servic.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  
  
  questionnaire:questionnaireModel={}


  constructor(private http:HttpServicService, private router:Router) {
   
  }
 
  getQuestionnaire(){
    this.http.httpGet<questionnaireModel>("/api/users/getQuestionnaire").subscribe(data=>{

       console.log(data);
       
      this.questionnaire.age=data.age;
      this.questionnaire.country=data.country;
      this.questionnaire.city=data.city;
      this.questionnaire.graduatiunYear=data.graduatiunYear;
      this.questionnaire.academic=data.academic;
      this.questionnaire.medical=data.medical;
      this.questionnaire.residency=data.residency;
      this.questionnaire.yearInResidency=data.yearInResidency;
      this.questionnaire.department=data.department;
    })
   }
   doneQuestionnaire(){
console.log('done s work');
     console.log(this.questionnaire);
     
    this.http.httpPut<questionnaireModel,any>("/api/users/updateQuestionnaire",this.questionnaire).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/Questionnaire1/2/3/done'])
    },err=>{
      console.log(err);
      this.router.navigate(['/Questionnaire1/2'])
    }
     

    )
   }
}
