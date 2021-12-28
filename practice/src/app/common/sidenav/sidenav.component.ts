import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  fillerNav = Array.from({ length: 63 }, (_, i) => `${i + 1}`);

  constructor(private _router: Router, private _headerCompo: HeaderComponent) { }

  ngOnInit(): void {
  }

  goto(ob: any) {
    this._router.navigate(['tutorial/', ob]);
  }
  home() {
    this._router.navigate(['home']);
  }

}
