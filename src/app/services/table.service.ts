import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  newClass=[]
  constructor() { }

  add(id:string){
    this.newClass.push(id)
    console.log(this.newClass);
    
  }
  remove(id:string){
    this.newClass=this.newClass.filter(arr=>arr!=id)
    console.log(this.newClass);
  }
}
