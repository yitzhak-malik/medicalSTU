import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { testModel } from 'src/app/interfaces/intern-model';
import { finalize } from 'rxjs/operators';
import { HttpServicService } from 'src/app/services/http-servic.service';



@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
 @Input() _idClass:string
 @Output() create:EventEmitter<boolean>= new EventEmitter<boolean>()
  newTest:testModel={}
  theFile;
  message:string;
  constructor(private storge:AngularFireStorage,private http:HttpServicService) {
    
  }
  
  ngOnInit(): void {
    this.newTest._idClass=this._idClass
    console.log(this._idClass);
  }
  choiseFile(event){
   this.theFile = event.target.files[0]
    
  }
  createTest(){
    const path=`tests/${this._idClass}/${this.newTest.subject}/${this.newTest.testName}_${Date.now()}`
    const fileurl=this.storge.ref(path)
    this.storge.upload(path,this.theFile)
    .snapshotChanges().pipe(finalize(()=>fileurl.getDownloadURL().subscribe(url=>{
      this.newTest.url=url
     this.http.httpPost<any,any>(`/api/supervisor/createTest`,this.newTest).subscribe()
      console.log( this.newTest.url)}
    ))).subscribe(data=>{
      this.message='the test created'
      setTimeout(() => {
        this.create.emit(false)
      },4000); 
    }
    )
  }


}
