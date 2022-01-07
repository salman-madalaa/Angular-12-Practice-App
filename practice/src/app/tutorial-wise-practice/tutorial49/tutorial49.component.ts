import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../tutorial47/services/service1.service';

@Component({
  selector: 'app-tutorial49',
  templateUrl: './tutorial49.component.html',
  styleUrls: ['./tutorial49.component.css']
})
export class Tutorial49Component implements OnInit {

  constructor(private _ser1:Service1Service) { }

  ngOnInit(): void {
  }

  login(login:any){
    console.log(login);
    this._ser1.postData(login).subscribe((data:any) =>{
      console.log(data)
    })
  }

}
