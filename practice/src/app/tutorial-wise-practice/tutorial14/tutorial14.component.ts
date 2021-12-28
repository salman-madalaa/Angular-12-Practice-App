import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial14',
  templateUrl: './tutorial14.component.html',
  styleUrls: ['./tutorial14.component.css']
})
export class Tutorial14Component implements OnInit {
  name='Salman';
  constructor() { }
  disable= false;
  ngOnInit(): void {
  }

}
