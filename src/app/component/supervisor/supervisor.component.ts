import { Component, Injector, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { academicModel, InternModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';
import { TableService } from 'src/app/services/table.service';
import { ModalCheckTestComponent } from '../modal-check-test/modal-check-test.component';

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
  _idClass:string
  tests=[{   
        'date':'2021-07-06T11:20:55.729+00:00',
        'testName':"first",
        'subject':"ioiouio",
        t:[{   
          'date':'11',
          'testName':"first",
          'subject':"ioiouio"},
          {   
            'date':'11',
            'testName':"first",
            'subject':"ioiouio"},
            {   
              'date':'11',
              'testName':"first",
              'subject':"ioiouio"} ]
      },
  {   
        'date':'2021-07-06T11:20:55.729+00:00',
        'testName':"first",
        'subject':"ioiouio",
        t:[{   
          'date':'11',
          'testName':"first",
          'subject':"ioiouio"},
          {   
            'date':'11',
            'testName':"first",
            'subject':"ioiouio"},
            {   
              'date':'11',
              'testName':"first",
              'subject':"ioiouio"}  ]
      },
  {   
        'date':'2021-07-06T11:20:55.729+00:00',
        'testName':"first",
        'subject':"ioiouio",
        t:[{   
          'date':'11',
          'testName':"first",
          'subject':"ioiouio"},
          {   
            'date':'11',
            'testName':"first",
            'subject':"ioiouio"},
            {   
              'date':'11',
              'testName':"first",
              'subject':"ioiouio"}]  
      },

 ]
      
  constructor(private http:HttpServicService,public table:TableService, private modalService: NgbModal, private injector:Injector) {
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
      this._idClass=this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id
      console.log(this._idClass,'idclass');
      
      console.log(this.class,this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id,'otry');
      
      this.http.httpPost<any,any>('/api/supervisor/getInternsOfClass',{_id:this.classes.filter((oneclass)=>oneclass.name==this.class)[0]._id}).subscribe((interns)=>{
        this.interns=interns;
        console.log(interns,'int')
        this.getTestOfClass()
      })
    }else{
    this.getInterns()
    }

  }
  checkClassNameExists(){
   this.classNameExists = this.classes.filter((oneclass)=>oneclass.name==this.nameNewClass)[0] ? true : false;
  }
  notCreateTest(event){
    
    this.createTest=event
  }
  getTestOfClass(){
    this.http.httpPost<any,any>('/api/supervisor/getTestOfClass',{_idClass:this._idClass}).subscribe(
      tests=>
          {   
          console.log(tests,"tests")
          this.tests=tests
          },
      err=>
      console.log(err,'err test')
    )
  }
  checkTest(test){
    var downloadLink=document.createElement('a')
    downloadLink.href=test.url
    downloadLink.setAttribute('target','_blanck')
    downloadLink.click()
    console.log(test,'clicktest');
   
  }
  open(test) {
 
     
    const modal=this.modalService.open(ModalCheckTestComponent)
   
  modal.componentInstance.test=test
  modal .result.then((result) => {
   // this.closeResult = `Closed with: ${result}`;
   console.log('modal',result,test,modal);
    
  }, (reason) => {
     //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  
}
