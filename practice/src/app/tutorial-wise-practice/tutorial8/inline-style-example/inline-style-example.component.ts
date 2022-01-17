import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style-example',
  templateUrl: './inline-style-example.component.html',
  styles: [
    `h1{
      color:red;
    }`
  ]
})
export class InlineStyleExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
