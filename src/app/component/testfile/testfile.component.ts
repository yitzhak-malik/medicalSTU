import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { InternModel } from 'src/app/interfaces/intern-model';
import { SignInService } from 'src/app/services/sign-in.service';
import { finalize } from "rxjs/operators";

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
    const fileurl=this.storge.ref(`${this.user.fullName}/hgfhgf/hrkk.docx`)
    this.storge.upload(`${this.user.fullName}/hgfhgf/hrkk.docx`,event.target.files[0]).snapshotChanges().pipe(finalize(()=>fileurl.getDownloadURL().subscribe(url=>console.log(url)
    ))).subscribe(data=>console.log(data)
    )

    
    


  }

}
