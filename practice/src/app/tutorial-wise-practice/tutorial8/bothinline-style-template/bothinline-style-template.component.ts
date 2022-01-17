import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bothinline-style-template',
  template: `
    <h3>
      bothinline-style-template works!
    </h3>
  `,
  styles: [
    `h3{
      color:green;
    }`
  ]
})
export class BothinlineStyleTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
