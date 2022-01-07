import { Component, OnInit } from '@angular/core';
import {Student} from './models/student';

@Component({
  selector: 'app-tutorial50',
  templateUrl: './tutorial50.component.html',
  styleUrls: ['./tutorial50.component.css']
})
export class Tutorial50Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  student:Student = {
    name: 'salman',
    age: 34,
    address: 'Hyderabad',
    email: 'salman@gmail.com',
  }

}
