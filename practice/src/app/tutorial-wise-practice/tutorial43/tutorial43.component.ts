import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial43',
  templateUrl: './tutorial43.component.html',
  styleUrls: ['./tutorial43.component.css']
})
export class Tutorial43Component implements OnInit {

  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log("id is : ",this.route.snapshot.paramMap.get('id'));
    console.log("name is :",this.route.snapshot.paramMap.get('name'));

  }

}
