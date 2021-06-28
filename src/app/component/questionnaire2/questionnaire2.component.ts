import { Component, OnInit } from '@angular/core';
import { questionnaireModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {
  questionnaire:questionnaireModel;
  academics:object[]
  constructor(public questionnaireService:QuestionnaireService, private http:HttpServicService) {
    this.questionnaireService.getQuestionnaire()
    this.questionnaire=this.questionnaireService.questionnaire;
    
   }

  ngOnInit(): void {
    this.http.httpGet<any>('/api/users/getAllAcademics').subscribe((academics)=>{
      this.academics=academics;
    console.log(this.academics);
    
    },err=>console.log(err)
    )
  }


}
