import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial46',
  templateUrl: './tutorial46.component.html',
  styleUrls: ['./tutorial46.component.css']
})
export class Tutorial46Component implements OnInit {

  userData=[
    {name:"salman",phoneNumber:963258741,address:"Hyderabad"},
    {name:"vijay",phoneNumber:963258742,address:"Hyderabad"},
    {name:"visesh",phoneNumber:963258744,address:"Hyderabad"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
