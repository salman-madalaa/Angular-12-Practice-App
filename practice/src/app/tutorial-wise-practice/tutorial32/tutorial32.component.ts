import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial32',
  templateUrl: './tutorial32.component.html',
  styleUrls: ['./tutorial32.component.css']
})
export class Tutorial32Component implements OnInit {

  obj : {name:string,phn:number} = {name:"salman",phn:123};
  arr : number[]=[10,20,30,40,50];
  arr1:string[] =["salman","visesh","vijay","prasad"]
  arr2: (string | number)[] =["salman",20,"vijay","prasad"]

  constructor() { }

  ngOnInit(): void {
  }

}
