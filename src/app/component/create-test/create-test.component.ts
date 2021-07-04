import { Component, Input, OnInit } from '@angular/core';
import { testModel } from 'src/app/interfaces/intern-model';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
 @Input() _idClass:string
  newTest:testModel={}
 
  constructor() { }

  ngOnInit(): void {
  }
  choiseFile(event){

  }
  createTest(){
    
  }


}
