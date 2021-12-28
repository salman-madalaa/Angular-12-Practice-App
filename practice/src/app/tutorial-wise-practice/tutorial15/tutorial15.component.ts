import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial15',
  templateUrl: './tutorial15.component.html',
  styleUrls: ['./tutorial15.component.css']
})
export class Tutorial15Component implements OnInit {
  show = true;
  show1 = true;
  constructor() { }

  ngOnInit(): void {
  }
  Show(){
    this.show1 = true;
  }
  Hide(){
    this.show1 = false;
  }

}
