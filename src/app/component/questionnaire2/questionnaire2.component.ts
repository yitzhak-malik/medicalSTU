import { Component, OnInit } from '@angular/core';
import { questionnaireModel } from 'src/app/interfaces/intern-model';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {
  questionnaire:questionnaireModel;
  toppingList=['hhh','jjj','kkk']
  constructor(public questionnaireService:QuestionnaireService) {
    this.questionnaireService.getQuestionnaire()
    this.questionnaire=this.questionnaireService.questionnaire;
    
   }

  ngOnInit(): void {
    
  }
  

}
