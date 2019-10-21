import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService{


  constructor(private http:HttpClient) {
   
  }

sendMessage(obj){
  return this.http.post('http://localhost:3000/all',obj);
}


}
