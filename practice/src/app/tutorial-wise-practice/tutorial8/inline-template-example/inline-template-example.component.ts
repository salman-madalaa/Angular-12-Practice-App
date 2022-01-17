import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-example',
  template: `
    <h1>
    This is Inline Template Example code!
    </h1>
  `,
  styleUrls: ['./inline-template-example.component.css']
})
export class InlineTemplateExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
