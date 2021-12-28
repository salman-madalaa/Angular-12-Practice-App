import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tutorial12',
  templateUrl: './tutorial12.component.html',
  styleUrls: ['./tutorial12.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Tutorial12Component implements OnInit {
  count=0;
  constructor() { }

  ngOnInit(): void {
  }

  conterFunction(val:string){
    val === 'add' ? this.count++ : this.check(this.count) ;  // This is if condition in type script
  }

  check(num:number) {
    num > 0 ? this.count-- : this.count = 0 ;  // This is if condition in type script
  }
}
