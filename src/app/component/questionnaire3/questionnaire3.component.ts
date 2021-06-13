import { Component, OnInit } from '@angular/core';
import { questionnaireModel } from 'src/app/interfaces/intern-model';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire3',
  templateUrl: './questionnaire3.component.html',
  styleUrls: ['./questionnaire3.component.css']
})
export class Questionnaire3Component implements OnInit {

  questionnaire:questionnaireModel;
  constructor(private questionnaireService:QuestionnaireService) {
    
    this.questionnaire=this.questionnaireService.questionnaire;
    
   }

  ngOnInit(): void {
  }
  done(){
    console.log('done');
    
    this.questionnaireService.doneQuestionnaire()
  }

}
