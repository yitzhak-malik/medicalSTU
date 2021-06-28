import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  academicModel, InternModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  supervisor:InternModel;
  academic:academicModel;
  id:string;
  password:string;
  path:string;
  work=false;
  message:string;
  arrAcademics:string[];
  academicList:string[];
  constructor(private activatedRoute:ActivatedRoute,private http:HttpServicService) {
    this.supervisor={}
    this.academic={}
    
    this.activatedRoute.paramMap.subscribe(rPar=>{this.id=rPar.get('id'),this.password=rPar.get('password')});
    this.activatedRoute.url.subscribe(url=>this.path=url[1].path)
     
   }

  ngOnInit(): void {
    
      this.http.httpPost(`/auth/admin/${this.path}`,{id:this.id,password:this.password}).subscribe(()=>{
        this.work=true
        console.log('this is',this.path);
         this.getAcademic()  
        },err=>{
          if(this.path=="create"){
            this.message="Sorry admin was not created !!!"
          }
          if(this.path=='login'){
            this.message='sorry isnt access!!!'
          }
        }
      )
   
   
    
  }
  createSupervisor(){
    this.http.httpPost(`/api/admin/createSupervisor`,{supervisor:this.supervisor,arrAcademics:this.arrAcademics}).subscribe()
    
  }
  academics(academic){
     this.supervisor.academics=academic.split(',')
    console.log(this.supervisor.academics);
    

  }
  createAcademic(){
    this.http.httpPost(`/api/admin/createAcademic`,this.academic).subscribe(()=>this.getAcademic())
    
  }
  hh(k){
    console.log(this.arrAcademics,'arr');
    console.log(k);
    
  }
  getAcademic(){
    this.http.httpGet<academicModel>('/api/admin/getAllAcademic').subscribe((data)=>{this.academicList=data.academics
    })
  }
  
}
