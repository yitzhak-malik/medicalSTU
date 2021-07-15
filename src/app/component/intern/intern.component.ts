import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { testModel } from 'src/app/interfaces/intern-model';
import { ModalSendTestComponent } from '../modal-send-test/modal-send-test.component';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {
  testsReceived:testModel[]=[
    {
      _idClass:"666",
      testName:"test",
      subject:"pro",
      url:'https://firebasestorage.googleapis.com/v0/b/madical-jbh.appspot.com/o/tests%2F60edf394b49de20004e6b9fb%2F%D7%98%D7%99%D7%A4%D7%95%D7%9C%20%D7%A9%D7%95%D7%A8%D7%A9%2F%D7%A9%D7%99%D7%A0%D7%99%20%D7%91%D7%99%D7%A0%D7%94_1626207169615?alt=media&token=0865401a-5e57-48b4-97f5-bb122ebb5638',
      score:99,
      role:'sdsdsd',
      supervisorName:"moshe",
      id:"5+56464564654",
      note:'no good',
      date:65456445465
    },
    {
      _idClass:"666",
      testName:"test",
      subject:"pro",
      url:'https://firebasestorage.googleapis.com/v0/b/madical-jbh.appspot.com/o/tests%2F60edf394b49de20004e6b9fb%2F%D7%98%D7%99%D7%A4%D7%95%D7%9C%20%D7%A9%D7%95%D7%A8%D7%A9%2F%D7%A9%D7%99%D7%A0%D7%99%20%D7%91%D7%99%D7%A0%D7%94_1626207169615?alt=media&token=0865401a-5e57-48b4-97f5-bb122ebb5638',
      score:99,
      role:'sdsdsd',
      supervisorName:"moshe",
      id:"5+56464564654",
      note:'no good',
      date:65456445465
    },
    {
      _idClass:"666",
      testName:"test",
      subject:"pro",
      url:'https://firebasestorage.googleapis.com/v0/b/madical-jbh.appspot.com/o/tests%2F60edf394b49de20004e6b9fb%2F%D7%98%D7%99%D7%A4%D7%95%D7%9C%20%D7%A9%D7%95%D7%A8%D7%A9%2F%D7%A9%D7%99%D7%A0%D7%99%20%D7%91%D7%99%D7%A0%D7%94_1626207169615?alt=media&token=0865401a-5e57-48b4-97f5-bb122ebb5638',
      score:99,
      role:'sdsdsd',
      supervisorName:"moshe",
      id:"5+56464564654",
      note:'no good',
      date:65456445465
    },
  ]
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

 startTest(test) {
 
     
    const modal=this.modalService.open(ModalSendTestComponent)
   
  modal.componentInstance.test=test
  modal .result.then((result) => {
   // this.closeResult = `Closed with: ${result}`;
   console.log('modal',result,test,modal);
    
  }, (reason) => {
     //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
}
