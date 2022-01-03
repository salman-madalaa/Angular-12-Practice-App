import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() item:{name:string,phoneNumber:string,address:string,email:string} = {name:'',phoneNumber:'',address:'',email:''};
  constructor() { }
  
  ngOnInit(): void {
  }

}
