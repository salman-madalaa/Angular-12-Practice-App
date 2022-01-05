import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutorial40',
  templateUrl: './tutorial40.component.html',
  styleUrls: ['./tutorial40.component.css']
})
export class Tutorial40Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    email: new FormControl('',[Validators.email,Validators.required]),
    phoneNumber: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]+$')]),
    address: new FormControl('',[Validators.required,Validators.maxLength(64)]),
    marks: new FormControl('',[Validators.required]),
  })

  registration() {
    console.log(this.studentForm.value);
  }

  get name() {
    return this.studentForm.get('name');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get phoneNumber() {
    return this.studentForm.get('phoneNumber');
  }
  get address() {
    return this.studentForm.get('address');
  }
  get marks() {
    return this.studentForm.get('marks');
  }
}
