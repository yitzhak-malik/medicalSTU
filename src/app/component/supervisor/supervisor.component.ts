import { Component, OnInit } from '@angular/core';
import { academicModel, InternModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  academics:object[]=[{}]
  academic:String
  interns:InternModel[]
  classes:academicModel[]=[{}]
  class:string
  CreateNewClass=false;
  constructor(private http:HttpServicService) {
  }
  
  ngOnInit(): void {
    this.http.httpGet<any>('/api/supervisor/getAllAcademics').subscribe((academics)=>{
      this.academics=academics;
      if(!this.academics[1]){
        this.academic=this.academics[0]['name']
        this.getInterns()
      }
    })
    
    
  }
  getInterns(){
    this.http.httpPost<any,any>('/api/supervisor/getInterns',{name:this.academic}).subscribe((interns)=>{
      this.interns=interns;
      console.log(interns)})

  }

}
