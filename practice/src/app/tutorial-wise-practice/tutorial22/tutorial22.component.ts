import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tutorial22',
  templateUrl: './tutorial22.component.html',
  styleUrls: ['./tutorial22.component.css']
})
export class Tutorial22Component implements OnInit {
  userData:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  getDetails(ob:NgForm){
    this.userData=ob;
    console.log(ob);

  }

}
