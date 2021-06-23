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
  constructor(private activatedRoute:ActivatedRoute,private http:HttpServicService) {
    this.supervisor={}
    this.academic={}
    
    this.activatedRoute.paramMap.subscribe(rPar=>{this.id=rPar.get('id'),this.password=rPar.get('password')});
    this.activatedRoute.url.subscribe(url=>this.path=url[1].path)
     
   }

  ngOnInit(): void {
    
      this.http.httpPost(`/auth/admin/${this.path}`,{id:this.id,password:this.password}).subscribe(()=>{
        this.work=true
        console.log('this is',this.path);},err=>{
          if(this.path=="create"){
            this.message="Sorry admin was not created !!!"
          }
          if(this.path=='login'){
            this.message='sorry isnt access!!!'
          }
        }
      )
   
    console.log(this.password);
    
  }
  createSupervisor(){
    console.log(this.supervisor);
    
  }
  academics(academic){
     this.supervisor.academics=academic.split(',')
    console.log(this.supervisor.academics);
    

  }
  createAcademic(){
    this.http.httpPost(`/api/admin/createAcademic`,this.academic).subscribe()
    
  }
  
}
