import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { testModel } from 'src/app/interfaces/intern-model';
import { HttpServicService } from 'src/app/services/http-servic.service';

@Component({
  selector: 'app-modal-check-test',
  templateUrl: './modal-check-test.component.html',
  styleUrls: ['./modal-check-test.component.css']
})
export class ModalCheckTestComponent implements OnInit {
@Input() test:testModel
  constructor(public activeModal:NgbActiveModal,private http:HttpServicService) { }

  ngOnInit(): void {
  }
  saveScore(){
    this.http.httpPut('/api/supervisor/GivingAtestScore',this.test).subscribe()
  }
}
