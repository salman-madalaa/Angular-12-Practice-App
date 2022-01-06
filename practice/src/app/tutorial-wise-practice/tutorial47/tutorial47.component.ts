import { Component, OnInit } from '@angular/core';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-tutorial47',
  templateUrl: './tutorial47.component.html',
  styleUrls: ['./tutorial47.component.css']
})
export class Tutorial47Component implements OnInit {
  data:any;
  constructor(private _ser1:Service1Service) {
    this.data = this._ser1.userData();
    console.log(this.data);
   }

  ngOnInit(): void {
  }

}
