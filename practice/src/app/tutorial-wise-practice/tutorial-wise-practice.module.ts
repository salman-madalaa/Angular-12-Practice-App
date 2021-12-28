import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { Tutorial21Component } from './tutorial21/tutorial21.component';
import { Tutorial22Component } from './tutorial22/tutorial22.component';
import { Tutorial23Component } from './tutorial23/tutorial23.component';
import { Tutorial25Component } from './tutorial25/tutorial25.component';



@NgModule({
  declarations: [
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
    HomeComponent,
    PageNotFoundComponent,
    Tutorial21Component,
    Tutorial22Component,
    Tutorial23Component,
    Tutorial25Component
  ],
  imports: [
    CommonModule,
    jqxSplitterModule,
    AngularMaterialModule,
    FormsModule,RouterModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialWisePracticeModule { }
