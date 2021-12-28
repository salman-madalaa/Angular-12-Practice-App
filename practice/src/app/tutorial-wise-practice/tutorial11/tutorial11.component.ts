import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial11',
  templateUrl: './tutorial11.component.html',
  styleUrls: ['./tutorial11.component.css']
})
export class Tutorial11Component implements OnInit {
  constructor() { }
  box1Value:any;
  box2Value:any;
  box3Value:any;
  ngOnInit(): void {
  }

  getWidth() : any {
		if (document.body.offsetWidth < 0) {
			return '100%';
		}
		return '99.8%';
	}

  getValue(val:any){
    this.box1Value=val;

  }

  getValue2(val:any){
    this.box2Value=val;

  }

  getValue3(val:any){
    this.box3Value=val;

  }

}
