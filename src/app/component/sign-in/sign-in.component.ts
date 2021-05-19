import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interfaces/intern-model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  intern:InternModel;
  constructor() { 
    this.intern={
      id:'',
      name:'',
      passport:'',
      tel:0
    }
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('lkkklk')
  }

}
