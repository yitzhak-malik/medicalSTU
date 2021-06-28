import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-questionnaire1',
  templateUrl: './questionnaire1.component.html',
  styleUrls: ['./questionnaire1.component.css']
})
export class Questionnaire1Component implements OnInit {

  constructor(public signInService: SignInService,private questionnaireService:QuestionnaireService ) { }

  ngOnInit(): void {
  }
 


}
