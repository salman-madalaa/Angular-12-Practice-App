import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-tutorial39',
  templateUrl: './tutorial39.component.html',
  styleUrls: ['./tutorial39.component.css']
})
export class Tutorial39Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentForm = new FormGroup({
    name:new FormControl('salman'),
    email:new FormControl(''),
    phoneNumber:new FormControl(''),
    address:new FormControl(''),
    marks:new FormControl(''),
  })

  registration(){
    console.log(this.studentForm.value);
  }

}
