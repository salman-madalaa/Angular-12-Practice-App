import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './tutorial-wise-practice/home/home.component';
import { PageNotFoundComponent } from './tutorial-wise-practice/page-not-found/page-not-found.component';
import { Tutorial11Component } from './tutorial-wise-practice/tutorial11/tutorial11.component';
import { Tutorial12Component } from './tutorial-wise-practice/tutorial12/tutorial12.component';
import { Tutorial13Component } from './tutorial-wise-practice/tutorial13/tutorial13.component';
import { Tutorial14Component } from './tutorial-wise-practice/tutorial14/tutorial14.component';
import { Tutorial15Component } from './tutorial-wise-practice/tutorial15/tutorial15.component';
import { Tutorial16Component } from './tutorial-wise-practice/tutorial16/tutorial16.component';
import { Tutorial17Component } from './tutorial-wise-practice/tutorial17/tutorial17.component';
import { Tutorial18Component } from './tutorial-wise-practice/tutorial18/tutorial18.component';
import { Tutorial19Component } from './tutorial-wise-practice/tutorial19/tutorial19.component';
import { Tutorial20Component } from './tutorial-wise-practice/tutorial20/tutorial20.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'tutorial/11', component:Tutorial11Component},
  {path: 'tutorial/12', component:Tutorial12Component},
  {path: 'tutorial/13', component:Tutorial13Component},
  {path: 'tutorial/14', component:Tutorial14Component},
  {path: 'tutorial/15', component:Tutorial15Component},
  {path: 'tutorial/16', component:Tutorial16Component},
  {path: 'tutorial/17', component:Tutorial17Component},
  {path: 'tutorial/18', component:Tutorial18Component},
  {path: 'tutorial/19', component:Tutorial19Component},
  {path: 'tutorial/20', component:Tutorial20Component},

  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }