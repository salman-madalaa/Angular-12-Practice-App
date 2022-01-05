import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Tutorial12Component } from './tutorial12/tutorial12.component';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';
import { Tutorial11Component } from './tutorial11/tutorial11.component';
import { Tutorial13Component } from './tutorial13/tutorial13.component';
import { Tutorial14Component } from './tutorial14/tutorial14.component';
import { Tutorial15Component } from './tutorial15/tutorial15.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Tutorial16Component } from './tutorial16/tutorial16.component';
import { Tutorial17Component } from './tutorial17/tutorial17.component';
import { Tutorial18Component } from './tutorial18/tutorial18.component';
import { Tutorial19Component } from './tutorial19/tutorial19.component';
import { Tutorial20Component } from './tutorial20/tutorial20.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { Tutorial21Component } from './tutorial21/tutorial21.component';
import { Tutorial22Component } from './tutorial22/tutorial22.component';
import { Tutorial23Component } from './tutorial23/tutorial23.component';
import { Tutorial25Component } from './tutorial25/tutorial25.component';
import { Tutorial24Component } from './tutorial24/tutorial24.component';
import { AngularNgBootstrapModule } from '../angular-ng-bootstrap/angular-ng-bootstrap.module';
import { Tutorial26Component } from './tutorial26/tutorial26.component';
import { Tutorial27Component } from './tutorial27/tutorial27.component';
import { Tutorial28Component } from './tutorial28/tutorial28.component';
import { ChildComponent } from './tutorial27/child/child.component';
import { UserDetailsComponent } from './tutorial28/user-details/user-details.component';
import { Tutorial29Component } from './tutorial29/tutorial29.component';
import { Tutorial30Component } from './tutorial30/tutorial30.component';
import { Tutorial31Component } from './tutorial31/tutorial31.component';
import { Tutorial32Component } from './tutorial32/tutorial32.component';
import { Tutorial33Component } from './tutorial33/tutorial33.component';
import { Child1Component } from './tutorial29/child1/child1.component';
import { Tutorial34Component } from './tutorial34/tutorial34.component';
import { Tutorial35Component } from './tutorial35/tutorial35.component';
import { Tutorial36Component } from './tutorial36/tutorial36.component';
import { USDINRPipe } from '../customePipes/usd-inr.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Tutorial37Component } from './tutorial37/tutorial37.component';
import { Tutorial38Component } from './tutorial38/tutorial38.component';
import { Tutorial39Component } from './tutorial39/tutorial39.component';
import { Tutorial40Component } from './tutorial40/tutorial40.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    Tutorial12Component,
    Tutorial11Component,
    Tutorial13Component,
    Tutorial14Component,
    Tutorial15Component,
    Tutorial16Component,
    Tutorial17Component,
    Tutorial18Component,
    Tutorial19Component,
    Tutorial20Component,
    Tutorial21Component,
    Tutorial22Component,
    Tutorial23Component,
    Tutorial24Component,
    Tutorial25Component,
    Tutorial26Component,
    Tutorial27Component,
    Tutorial28Component,
    ChildComponent,
    UserDetailsComponent,
    Tutorial29Component,
    Tutorial30Component,
    Tutorial31Component,
    Tutorial32Component,
    Tutorial33Component,
    Child1Component,
    Tutorial34Component,
    Tutorial35Component,
    Tutorial36Component,
    Tutorial37Component,
    Tutorial38Component,
    Tutorial39Component,
    Tutorial40Component,
    USDINRPipe,

  ],
  imports: [
    CommonModule,BrowserModule,
    jqxSplitterModule,
    AngularMaterialModule,
    FormsModule,RouterModule,
    AngularNgBootstrapModule,
    HttpClientModule,ReactiveFormsModule,
  ],
  bootstrap: [Tutorial24Component],
  exports: [Tutorial24Component,ChildComponent,UserDetailsComponent,USDINRPipe],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialWisePracticeModule { }
