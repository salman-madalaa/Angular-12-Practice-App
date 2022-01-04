import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial38',
  templateUrl: './tutorial38.component.html',
  styleUrls: ['./tutorial38.component.css']
})
export class Tutorial38Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(val:any){
    console.log(val);
  }

}
