import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial28',
  templateUrl: './tutorial28.component.html',
  styleUrls: ['./tutorial28.component.css']
})
export class Tutorial28Component implements OnInit {

  userDetails = [
    {name:"salman",phoneNumber:"9703395735",address:"Suddapalli",email:"salman@gmail.com"},
    {name:"prasad",phoneNumber:"9703395765",address:"Hyderabad",email:"prasad@gmail.com"},
    {name:"visesh",phoneNumber:"703029283",address:"Kakinada",email:"visesh@gmail.com"},
    {name:"vijay",phoneNumber:"9703395737",address:"Pitapuram",email:"vijay@gmail.com"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
