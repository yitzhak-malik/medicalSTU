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
  interns:InternModel[]=[]
  classes:academicModel[]=[]
  class:string
  CreateNewClass=false;
  nameNewClass:string
  classNameExists=false
  createTest=false
 
  constructor(private http:HttpServicService,public table:TableService) {
  }
  
  ngOnInit(): void {
    this.http.httpGet<any>('/api/supervisor/getAllAcademics').subscribe((academics)=>{
      this.academics=academics;
      if(!this.academics[1]){
        this.academic=this.academics[0]['name']
        this.getInterns()
        this.getClasses()
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
      console.log(classes,"this is class")})
     

  }
  createClass(){
    if(!this.classes.filter(thisClass=>thisClass.name==this.nameNewClass)[0] && this.academic ){

      this.http.httpPost<any,any>('/api/supervisor/createClass',{namesInterns:this.table.newClass,academic:this.academic,nameClass:this.nameNewClass }).subscribe((classs)=>{
      this.getClasses()
      this.clear()
      })
    }
  }
  clear(){
    this.table.newClass=[]
    this.nameNewClass=''
    this.class=''
  } 
  getInternsOfClass(){
    if(this.class!='all interns of academic'){
      
      console.log(this.class,this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id,'otry');
      
      this.http.httpPost<any,any>('/api/supervisor/getInternsOfClass',{_id:this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id}).subscribe((interns)=>{
        this.interns=interns;
        console.log(interns,'int')
      })
    }else{
    this.getInterns()
    }

  }
  checkClassNameExists(){
   this.classNameExists = this.classes.filter((oneclass)=>oneclass.name==this.nameNewClass)[0] ? true : false;
   
   
  }

}
