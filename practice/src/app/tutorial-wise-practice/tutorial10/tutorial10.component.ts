import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial10',
  templateUrl: './tutorial10.component.html',
  styleUrls: ['./tutorial10.component.css']
})
export class Tutorial10Component implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    return "Hello this content is from function";
  }

  clickme() {
    this.data = "Hello this content is from function";
  }
  
  alert(ob: any) {
    alert(ob);
  }

}
