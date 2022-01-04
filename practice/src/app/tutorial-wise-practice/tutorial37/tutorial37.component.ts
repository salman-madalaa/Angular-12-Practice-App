import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-tutorial37',
  templateUrl: './tutorial37.component.html',
  styleUrls: ['./tutorial37.component.css']
})
export class Tutorial37Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(val:Form){
    console.log(val);
  }

}
