import { Injectable } from '@angular/core';
import { questionnaireModel } from '../interfaces/intern-model';
import { HttpServicService } from './http-servic.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  
  
  questionnaire:questionnaireModel={}


  constructor(private http:HttpServicService) {
   
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
console.log('done s');

    this.http.httpPut("/api/users/updateQuestionnaire",this.questionnaire).subscribe(data=>console.log(data)
    )
   }
}
