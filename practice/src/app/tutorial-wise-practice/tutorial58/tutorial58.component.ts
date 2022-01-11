import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial58',
  templateUrl: './tutorial58.component.html',
  styleUrls: ['./tutorial58.component.css']
})
export class Tutorial58Component implements OnInit {
  name = "tutorial58"
  constructor() { }

  ngOnInit(): void {
  }

  sum(a:number,b:number):number {
    const c = a + b;
    return c;
  }

}
