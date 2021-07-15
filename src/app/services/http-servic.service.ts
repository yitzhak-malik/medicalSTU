import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap }from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Token } from '../interfaces/intern-model';


@Injectable({
  providedIn: 'root'
})
export class HttpServicService {
    baseURL:string=environment.baseUrlServer;
    token:string=""

  constructor(private http:HttpClient ) {

   

   }
   httpPost<S,G extends Token>(path:string,data:S,headers?:{}):Observable<G>{
    return this.http.post<G>(this.baseURL+path,data,this.getOptions(headers)).pipe(tap((data) => data? data.token?this.token = data.token:null:null))
  }
  httpGet<G extends Token>(path:string,headers?:{}):Observable<G>{
    return this.http.get<G>(this.baseURL+path,this.getOptions(headers)).pipe(tap((data) =>  data?data.token? this.token = data.token:null:null))
  }
  httpPut<S,G extends Token>(path:string,data:S,headers?:{}):Observable<G>{
    return this.http.put<G>(this.baseURL+path,data,this.getOptions(headers)).pipe(tap((data) =>  data?data.token? this.token = data.token:null:null))
  }
  httpDelete<G extends Token>(path:string,headers?:{}):Observable<G>{
    return this.http.delete<G>(this.baseURL+path,this.getOptions(headers)).pipe(tap((data) =>  data?data.token? this.token = data.token:null:null))
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