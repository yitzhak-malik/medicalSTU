import { Injectable } from '@angular/core';
import { InternModel } from '../interfaces/intern-model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  user: InternModel;
  constructor() {
   this.user={
    id:"",
    name:"",
    passport: "",
    tel:0
   }
  }
}
