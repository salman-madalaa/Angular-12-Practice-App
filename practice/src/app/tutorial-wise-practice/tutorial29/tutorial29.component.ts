import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial29',
  templateUrl: './tutorial29.component.html',
  styleUrls: ['./tutorial29.component.css']
})
export class Tutorial29Component implements OnInit {

  data:any;

  constructor() { }

  ngOnInit(): void {
  }

  updateData(item:string) {
    console.log(item);
    this.data=item;
  }

}
