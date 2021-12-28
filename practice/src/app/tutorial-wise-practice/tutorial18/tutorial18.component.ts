import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial18',
  templateUrl: './tutorial18.component.html',
  styleUrls: ['./tutorial18.component.css']
})
export class Tutorial18Component implements OnInit {

  users = ['anil','salman','prasad','vijay','visesh']
  userDetails = [
    {name:'salman',email:'salmanmadala@gmail.com',address:'hyderabad'},
    {name:'anil',email:'anil@gmail.com',address:'vijayawada'},
    {name:'vijay',email:'vijay@gmail.com',address:'kakinada'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
