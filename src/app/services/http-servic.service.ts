import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap }from 'rxjs/operators'
import { InternModel,loginModel, Token } from '../interfaces/intern-model';

@Injectable({
  providedIn: 'root'
})
export class HttpServicService {
    baseURL:string='http://localhost:8080'
    token:string=""

  constructor(private http:HttpClient ) {

   

   }
   httpPost<S,G extends Token>(path:string,data:S,headers?:{}):Observable<G>{
    return this.http.post<G>(this.baseURL+path,data,this.getOptions(headers)).pipe(tap((data) => data? this.token = data.token || '':null))
  }
  httpGet<G extends Token>(path:string,headers?:{}):Observable<G>{
    return this.http.get<G>(this.baseURL+path,this.getOptions(headers)).pipe(tap((data) => data? this.token = data.token || '':null))
  }
  httpPut<S,G extends Token>(path:string,data:S,headers?:{}):Observable<G>{
    return this.http.put<G>(this.baseURL+path,data,this.getOptions(headers)).pipe(tap((data) => data? this.token = data.token || '':null))
  }
  httpDelete<G extends Token>(path:string,headers?:{}):Observable<G>{
    return this.http.delete<G>(this.baseURL+path,this.getOptions(headers)).pipe(tap((data) => data? this.token = data.token || '':null))
  }




  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token ||'';
    return {
      headers: new HttpHeaders(headers)   
    }
  }

}