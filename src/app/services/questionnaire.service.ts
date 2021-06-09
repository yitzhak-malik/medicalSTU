import { Injectable } from '@angular/core';
import { questionnaireModel } from '../interfaces/intern-model';
import { HttpServicService } from './http-servic.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  questionnaire:questionnaireModel={}
  constructor(private http:HttpServicService) {
    http.httpGet("/api/users/getQuestionnaire").subscribe(data=>this.questionnaire=data)
  }
   
}
