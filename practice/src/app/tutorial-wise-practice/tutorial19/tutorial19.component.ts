import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial19',
  templateUrl: './tutorial19.component.html',
  styleUrls: ['./tutorial19.component.css']
})
export class Tutorial19Component implements OnInit {

  users = [
    {name:'salman',email:'salmanmadala@gmail.com',address:'hyderabad'},
    {name:'anil',email:'anil@gmail.com',address:'vijayawada'},
    {name:'vijay',email:'vijay@gmail.com',address:'kakinada'}
  ]
  nestedUserDetails=[
    {name:'salman',email:'salmanmadala@gmail.com',address:'hyderabad',socialAccount:['fb','insta','twitter']},
    {name:'anil',email:'anil@gmail.com',address:'vijayawada',socialAccount:['fb','twitter','linkedin']},
    {name:'vijay',email:'vijay@gmail.com',address:'kakinada',socialAccount:['insta','twitter','yahoo']}
  ]

  multi:number[ ][ ] = [[1,2,3],[23,24,25]]

  constructor() { }

  ngOnInit(): void {
  }

}
