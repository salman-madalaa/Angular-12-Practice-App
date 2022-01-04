import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial33',
  templateUrl: './tutorial33.component.html',
  styleUrls: ['./tutorial33.component.css']
})
export class Tutorial33Component implements OnInit {

  today=Date();

  jsonVal = { moo: 'foo', goo: { too: 'new' }}

  constructor() { }

  ngOnInit(): void {
  }

  capString(item:string){
    return item.toUpperCase();
  }
}
