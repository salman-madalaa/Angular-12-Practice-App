import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


const ngBootstrapModules = [
  NgbModule,
  NgbAlertModule
]

@NgModule({
  declarations: [],
  imports: [CommonModule,ngBootstrapModules],
  exports: [ngBootstrapModules]
})
export class AngularNgBootstrapModule { }
