import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial23',
  templateUrl: './tutorial23.component.html',
  styleUrls: ['./tutorial23.component.css']
})
export class Tutorial23Component implements OnInit {
  display= true;
  display1= true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.display1= !this.display1
  }

}
