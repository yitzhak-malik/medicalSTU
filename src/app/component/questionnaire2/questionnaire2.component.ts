import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {

  constructor(public questionnaireService:QuestionnaireService) {
    this.questionnaireService.questionnaire
    
   }

  ngOnInit(): void {
  }

}
