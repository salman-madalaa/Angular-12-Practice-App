import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial31',
  templateUrl: './tutorial31.component.html',
  styleUrls: ['./tutorial31.component.css']
})
export class Tutorial31Component implements OnInit {
  boxValue:any;
  constructor() { }

  ngOnInit(): void {
  }

  getInputValue(val:HTMLInputElement){
    console.log(val);
    this.boxValue = val.value;
  }

}
