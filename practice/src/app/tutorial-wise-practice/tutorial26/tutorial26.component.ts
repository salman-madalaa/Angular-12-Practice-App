import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial26',
  templateUrl: './tutorial26.component.html',
  styleUrls: ['./tutorial26.component.css']
})
export class Tutorial26Component implements OnInit {

  list:any[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(item: string) {
    this.list.push({id:this.list.length,name:item});
  }
  removeTask(id:number){
    // this.list.splice(this.list.indexOf(id), 1);  another way
    this.list = this.list.filter(item => item.id !== id);

  }
}
