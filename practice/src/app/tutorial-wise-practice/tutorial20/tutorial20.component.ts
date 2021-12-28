import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial20',
  templateUrl: './tutorial20.component.html',
  styleUrls: ['./tutorial20.component.css']
})
export class Tutorial20Component implements OnInit {
  color="red"
  color1 = "green"
  bgColor = "yellow"
  constructor() { }

  ngOnInit(): void {
  }

  updateColor(){
    this.color = "green"
  }

}
