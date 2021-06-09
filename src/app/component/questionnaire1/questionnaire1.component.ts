import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-questionnaire1',
  templateUrl: './questionnaire1.component.html',
  styleUrls: ['./questionnaire1.component.css']
})
export class Questionnaire1Component implements OnInit {

  constructor(public signInService: SignInService) { }

  ngOnInit(): void {
  }

}
