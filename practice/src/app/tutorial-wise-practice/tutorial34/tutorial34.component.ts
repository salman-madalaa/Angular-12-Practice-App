import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial34',
  templateUrl: './tutorial34.component.html',
  styleUrls: ['./tutorial34.component.css']
})
export class Tutorial34Component implements OnInit {
  today = Date();
  jsonVal = { moo: 'foo', goo: { too: 'new' }}
  constructor() { }

  ngOnInit(): void {
  }

}
