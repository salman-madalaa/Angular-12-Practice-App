import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
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
import { Tutorial21Component } from './tutorial-wise-practice/tutorial21/tutorial21.component';
import { Tutorial22Component } from './tutorial-wise-practice/tutorial22/tutorial22.component';
import { Tutorial23Component } from './tutorial-wise-practice/tutorial23/tutorial23.component';
import { Tutorial24Component } from './tutorial-wise-practice/tutorial24/tutorial24.component';
import { Tutorial25Component } from './tutorial-wise-practice/tutorial25/tutorial25.component';
import { Tutorial26Component } from './tutorial-wise-practice/tutorial26/tutorial26.component';
import { Tutorial27Component } from './tutorial-wise-practice/tutorial27/tutorial27.component';
import { Tutorial28Component } from './tutorial-wise-practice/tutorial28/tutorial28.component';
import { Tutorial29Component } from './tutorial-wise-practice/tutorial29/tutorial29.component';
import { Tutorial30Component } from './tutorial-wise-practice/tutorial30/tutorial30.component';
import { Tutorial31Component } from './tutorial-wise-practice/tutorial31/tutorial31.component';
import { Tutorial32Component } from './tutorial-wise-practice/tutorial32/tutorial32.component';
import { Tutorial33Component } from './tutorial-wise-practice/tutorial33/tutorial33.component';
import { Tutorial34Component } from './tutorial-wise-practice/tutorial34/tutorial34.component';
import { Tutorial35Component } from './tutorial-wise-practice/tutorial35/tutorial35.component';
import { Tutorial36Component } from './tutorial-wise-practice/tutorial36/tutorial36.component';
import { Tutorial37Component } from './tutorial-wise-practice/tutorial37/tutorial37.component';
import { Tutorial38Component } from './tutorial-wise-practice/tutorial38/tutorial38.component';
import { Tutorial39Component } from './tutorial-wise-practice/tutorial39/tutorial39.component';
import { Tutorial40Component } from './tutorial-wise-practice/tutorial40/tutorial40.component';
import { Tutorial41Component } from './tutorial-wise-practice/tutorial41/tutorial41.component';
import { Tutorial42Component } from './tutorial-wise-practice/tutorial42/tutorial42.component';
import { Tutorial43Component } from './tutorial-wise-practice/tutorial43/tutorial43.component';
import { Tutorial44Component } from './tutorial-wise-practice/tutorial44/tutorial44.component';
import { Page1Component } from './tutorial-wise-practice/tutorial45/pages/page1/page1.component';
import { Page2Component } from './tutorial-wise-practice/tutorial45/pages/page2/page2.component';
import { Page3Component } from './tutorial-wise-practice/tutorial45/pages/page3/page3.component';
import { Tutorial45Component } from './tutorial-wise-practice/tutorial45/tutorial45.component';
import { Tutorial46Component } from './tutorial-wise-practice/tutorial46/tutorial46.component';
import { Tutorial47Component } from './tutorial-wise-practice/tutorial47/tutorial47.component';
import { Tutorial48Component } from './tutorial-wise-practice/tutorial48/tutorial48.component';
import { Tutorial49Component } from './tutorial-wise-practice/tutorial49/tutorial49.component';
import { Tutorial50Component } from './tutorial-wise-practice/tutorial50/tutorial50.component';
import { Tutorial51Component } from './tutorial-wise-practice/tutorial51/tutorial51.component';
import { Tutorial52Component } from './tutorial-wise-practice/tutorial52/tutorial52.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tutorial/11', component: Tutorial11Component },
  { path: 'tutorial/12', component: Tutorial12Component },
  { path: 'tutorial/13', component: Tutorial13Component },
  { path: 'tutorial/14', component: Tutorial14Component },
  { path: 'tutorial/15', component: Tutorial15Component },
  { path: 'tutorial/16', component: Tutorial16Component },
  { path: 'tutorial/17', component: Tutorial17Component },
  { path: 'tutorial/18', component: Tutorial18Component },
  { path: 'tutorial/19', component: Tutorial19Component },
  { path: 'tutorial/20', component: Tutorial20Component },
  { path: 'tutorial/21', component: Tutorial21Component },
  { path: 'tutorial/22', component: Tutorial22Component },
  { path: 'tutorial/23', component: Tutorial23Component },
  { path: 'tutorial/24', component: Tutorial24Component },
  { path: 'tutorial/25', component: Tutorial25Component },
  { path: 'tutorial/26', component: Tutorial26Component },
  { path: 'tutorial/27', component: Tutorial27Component },
  { path: 'tutorial/28', component: Tutorial28Component },
  { path: 'tutorial/29', component: Tutorial29Component },
  { path: 'tutorial/30', component: Tutorial30Component },
  { path: 'tutorial/31', component: Tutorial31Component },
  { path: 'tutorial/32', component: Tutorial32Component },
  { path: 'tutorial/33', component: Tutorial33Component },
  { path: 'tutorial/34', component: Tutorial34Component },
  { path: 'tutorial/35', component: Tutorial35Component },
  { path: 'tutorial/36', component: Tutorial36Component },
  { path: 'tutorial/37', component: Tutorial37Component },
  { path: 'tutorial/38', component: Tutorial38Component },
  { path: 'tutorial/39', component: Tutorial39Component },
  { path: 'tutorial/40', component: Tutorial40Component },
  { path: 'tutorial/41', component: Tutorial41Component },
  { path: 'tutorial/42', component: Tutorial42Component },
  { path: 'tutorial/43', component: Tutorial43Component },
  { path: 'tutorial/44', component: Tutorial44Component },
  {
    path: 'tutorial/45', component: Tutorial45Component, children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component }
    ]
  },
  { path: 'tutorial/46', component: Tutorial46Component },
  { path: 'tutorial/47', component: Tutorial47Component },
  { path: 'tutorial/48', component: Tutorial48Component },
  { path: 'tutorial/49', component: Tutorial49Component },
  { path: 'tutorial/50', component: Tutorial50Component },
  { path: 'tutorial/51', component: Tutorial51Component },
  { path: 'tutorial/52', component: Tutorial52Component },

  // { path: 'tutorial/:id/:name', component: Tutorial43Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AdminRoutingModule],
  exports: [RouterModule,AdminRoutingModule]
})
export class AppRoutingModule { }
