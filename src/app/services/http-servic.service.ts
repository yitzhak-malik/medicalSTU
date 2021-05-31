import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternModel,loginModel } from '../interfaces/intern-model';

@Injectable({
  providedIn: 'root'
})
export class HttpServicService {
    baseURL:string='http://localhost:8080'
  constructor(private http:HttpClient ) {

   

   }
   httpAuth(intern:InternModel):Observable<loginModel>{
    return this.http.post<loginModel>(this.baseURL+'/auth'+'/chekUser',intern)

  }

}
