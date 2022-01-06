import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  userDataa=[
    {name:"salman",phoneNumber:963258741,address:"Hyderabad"},
    {name:"vijay",phoneNumber:963258742,address:"Hyderabad"},
    {name:"visesh",phoneNumber:963258744,address:"Hyderabad"}
  ]

  constructor(private http:HttpClient) { }

  userData(){
    return this.userDataa;
  }
  getData(){
    return this.http.get("https://api.fastforex.io/fetch-multi?from=USD&to=INR&api_key=demo");
  }
}
