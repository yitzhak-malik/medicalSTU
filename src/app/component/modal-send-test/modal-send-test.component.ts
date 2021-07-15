import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { testModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';

@Component({
  selector: 'app-modal-send-test',
  templateUrl: './modal-send-test.component.html',
  styleUrls: ['./modal-send-test.component.css']
})
export class ModalSendTestComponent implements OnInit {
  @Input() test:testModel
  theFile;
  constructor(public activeModal:NgbActiveModal,private http:HttpServicService) { }

  ngOnInit(): void {
  }
  
  downloadLink(){
  
    console.log(this.test);

   var downloadLink=document.createElement('a')
    downloadLink.href=this.test.url
    downloadLink.setAttribute('target','_blanck')
   
    downloadLink.click()

  }
  sendTest(){
    console.log(this.theFile);
    
  }

}
