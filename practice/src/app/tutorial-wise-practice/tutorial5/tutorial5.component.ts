import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial5',
  templateUrl: './tutorial5.component.html',
  styleUrls: ['./tutorial5.component.css']
})
export class Tutorial5Component implements OnInit {
  temp ="CassiniPLM"
  num = 100
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    return 5+10;
  }
  getValue(){
    return " This is from component.ts file"
  }

}
