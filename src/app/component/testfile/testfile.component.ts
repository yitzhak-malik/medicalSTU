import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { InternModel } from 'src/app/interfaces/intern-model';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-testfile',
  templateUrl: './testfile.component.html',
  styleUrls: ['./testfile.component.css']
})
export class TestfileComponent implements OnInit {
user;
  constructor(private storge:AngularFireStorage, private intern:SignInService ) {
   this.user={
     fullName:"jj"
   }}

  ngOnInit(): void {
  }
  add(event:any){
    console.log(event);
    
    this.storge.upload(`${this.user.fullName}/hgfhgf/hrkk.txt`,event.target.files[0])
  
    


  }

}
