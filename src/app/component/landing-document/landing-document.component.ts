import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-document',
  templateUrl: './landing-document.component.html',
  styleUrls: ['./landing-document.component.css']
})
export class LandingDocumentComponent implements OnInit {
h:boolean;
status:string="interns";
  constructor() {
    this.h=true;
   }

  ngOnInit(): void {
  }

}
