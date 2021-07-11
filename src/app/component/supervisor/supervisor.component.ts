import { Component, OnInit } from '@angular/core';
import { academicModel, InternModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  academics:object[]=[{}]
  academic:String
  interns:InternModel[]
  classes:academicModel[]=[]
  class:string
  CreateNewClass=false;
  nameNewClass:string
 
  constructor(private http:HttpServicService,private table:TableService) {
  }
  
  ngOnInit(): void {
    this.http.httpGet<any>('/api/supervisor/getAllAcademics').subscribe((academics)=>{
      this.academics=academics;
      if(!this.academics[1]){
        this.academic=this.academics[0]['name']
        this.getInterns()
        console.log(this.interns);
        
      }
    })
    
    
  }
  getInterns(){
    this.http.httpPost<any,any>('/api/supervisor/getInterns',{name:this.academic}).subscribe((interns)=>{
      this.interns=interns;
      console.log(interns)})
      this.table.newClass=[]

  }
  getClasses(){
    console.log(this.academic);
    this.http.httpPost<any,any>('/api/supervisor/getClasses',{academic:this.academic}).subscribe((classes)=>{
      this.classes=classes;
      console.log(classes)})
     

  }
  createClass(){
    console.log(!this.classes.filter((oneclass)=>oneclass.name==this.nameNewClass))
    this.http.httpPost<any,any>('/api/supervisor/createClass',{namesInterns:this.table.newClass,academic:this.academic,nameClass:this.nameNewClass})
    .subscribe((classs)=>{console.log(classs); this.getClasses()}
    )
  }
  clear(){
    this.table.newClass=[]
  } 
  getInternsOfClass(){
    console.log(this.class,this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id);
    
    this.http.httpPost<any,any>('/api/supervisor/getInternsOfClass',{_id:this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id}).subscribe((interns)=>{
      this.interns=interns;
      console.log(interns,'int')
    })
  }

}
