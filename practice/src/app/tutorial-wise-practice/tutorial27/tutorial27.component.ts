import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial27',
  templateUrl: './tutorial27.component.html',
  styleUrls: ['./tutorial27.component.css']
})
export class Tutorial27Component implements OnInit {

  data1 = 10;
  data2:any;
  constructor() { }

  ngOnInit(): void {
  }
  update(val:any){
    this.data2 = val;
  }

}
