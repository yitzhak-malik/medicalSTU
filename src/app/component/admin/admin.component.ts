import { Component, OnInit } from '@angular/core';
import {  academicModel, InternModel } from 'src/app/interfaces/intern-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  supervisor:InternModel;
  academic:academicModel;
  constructor() {
    this.supervisor={}
    this.academic={}
   }

  ngOnInit(): void {
  }
  createSupervisor(){
    console.log(this.supervisor);
    
  }
  academics(academic){
     this.supervisor.academics=academic.split(',')
    console.log(this.supervisor.academics);
    

  }
  createAcademic(){
    console.log(this.academic);
    
  }
  
}
