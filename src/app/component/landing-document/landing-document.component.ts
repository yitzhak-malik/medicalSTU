import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-document',
  templateUrl: './landing-document.component.html',
  styleUrls: ['./landing-document.component.css']
})
export class LandingDocumentComponent implements OnInit {
h:boolean;
  constructor() {
    this.h=true;
   }

  ngOnInit(): void {
  }

}
