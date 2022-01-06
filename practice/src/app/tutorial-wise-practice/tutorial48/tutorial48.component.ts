import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../tutorial47/services/service1.service';

@Component({
  selector: 'app-tutorial48',
  templateUrl: './tutorial48.component.html',
  styleUrls: ['./tutorial48.component.css']
})
export class Tutorial48Component implements OnInit {
 dataa:any;
  constructor(private _ser1:Service1Service) {   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._ser1.getData().subscribe((data)=>{
      console.log(data);
      this.dataa= data;
    })
  }

}
