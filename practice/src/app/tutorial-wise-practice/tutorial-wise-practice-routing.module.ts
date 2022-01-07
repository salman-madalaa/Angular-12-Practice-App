import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User1Module } from '../user1/user1.module';
import { Tutorial11Component } from './tutorial11/tutorial11.component';
import { Tutorial12Component } from './tutorial12/tutorial12.component';
import { Tutorial13Component } from './tutorial13/tutorial13.component';
import { Tutorial14Component } from './tutorial14/tutorial14.component';
import { Tutorial15Component } from './tutorial15/tutorial15.component';
import { Tutorial16Component } from './tutorial16/tutorial16.component';
import { Tutorial17Component } from './tutorial17/tutorial17.component';
import { Tutorial18Component } from './tutorial18/tutorial18.component';
import { Tutorial19Component } from './tutorial19/tutorial19.component';
import { Tutorial20Component } from './tutorial20/tutorial20.component';
import { Tutorial21Component } from './tutorial21/tutorial21.component';
import { Tutorial22Component } from './tutorial22/tutorial22.component';
import { Tutorial23Component } from './tutorial23/tutorial23.component';
import { Tutorial24Component } from './tutorial24/tutorial24.component';
import { Tutorial25Component } from './tutorial25/tutorial25.component';
import { Tutorial26Component } from './tutorial26/tutorial26.component';
import { Tutorial27Component } from './tutorial27/tutorial27.component';
import { Tutorial28Component } from './tutorial28/tutorial28.component';
import { Tutorial29Component } from './tutorial29/tutorial29.component';
import { Tutorial30Component } from './tutorial30/tutorial30.component';
import { Tutorial31Component } from './tutorial31/tutorial31.component';
import { Tutorial32Component } from './tutorial32/tutorial32.component';
import { Tutorial33Component } from './tutorial33/tutorial33.component';
import { Tutorial34Component } from './tutorial34/tutorial34.component';
import { Tutorial35Component } from './tutorial35/tutorial35.component';
import { Tutorial36Component } from './tutorial36/tutorial36.component';
import { Tutorial37Component } from './tutorial37/tutorial37.component';
import { Tutorial38Component } from './tutorial38/tutorial38.component';
import { Tutorial39Component } from './tutorial39/tutorial39.component';
import { Tutorial40Component } from './tutorial40/tutorial40.component';
import { Tutorial41Component } from './tutorial41/tutorial41.component';
import { Tutorial42Component } from './tutorial42/tutorial42.component';
import { Tutorial43Component } from './tutorial43/tutorial43.component';
import { Tutorial44Component } from './tutorial44/tutorial44.component';
import { Page1Component } from './tutorial45/pages/page1/page1.component';
import { Page2Component } from './tutorial45/pages/page2/page2.component';
import { Page3Component } from './tutorial45/pages/page3/page3.component';
import { Tutorial45Component } from './tutorial45/tutorial45.component';
import { Tutorial46Component } from './tutorial46/tutorial46.component';
import { Tutorial47Component } from './tutorial47/tutorial47.component';
import { Tutorial48Component } from './tutorial48/tutorial48.component';
import { Tutorial49Component } from './tutorial49/tutorial49.component';
import { Tutorial50Component } from './tutorial50/tutorial50.component';
import { Tutorial51Component } from './tutorial51/tutorial51.component';
import { Tutorial52Component } from './tutorial52/tutorial52.component';
import { Tutorial53Component } from './tutorial53/tutorial53.component';
import { Tutorial54Component } from './tutorial54/tutorial54.component';
import { Tutorial55Component } from './tutorial55/tutorial55.component';
import { Tutorial56Component } from './tutorial56/tutorial56.component';


const tutorialRoutes: Routes = [
  { path:'',children:[
    { path: '11', component: Tutorial11Component },
    { path: '12', component: Tutorial12Component },
    { path: '13', component: Tutorial13Component },
    { path: '14', component: Tutorial14Component },
    { path: '15', component: Tutorial15Component },
    { path: '16', component: Tutorial16Component },
    { path: '17', component: Tutorial17Component },
    { path: '18', component: Tutorial18Component },
    { path: '19', component: Tutorial19Component },
    { path: '20', component: Tutorial20Component },
    { path: '21', component: Tutorial21Component },
    { path: '22', component: Tutorial22Component },
    { path: '23', component: Tutorial23Component },
    { path: '24', component: Tutorial24Component },
    { path: '25', component: Tutorial25Component },
    { path: '26', component: Tutorial26Component },
    { path: '27', component: Tutorial27Component },
    { path: '28', component: Tutorial28Component },
    { path: '29', component: Tutorial29Component },
    { path: '30', component: Tutorial30Component },
    { path: '31', component: Tutorial31Component },
    { path: '32', component: Tutorial32Component },
    { path: '33', component: Tutorial33Component },
    { path: '34', component: Tutorial34Component },
    { path: '35', component: Tutorial35Component },
    { path: '36', component: Tutorial36Component },
    { path: '37', component: Tutorial37Component },
    { path: '38', component: Tutorial38Component },
    { path: '39', component: Tutorial39Component },
    { path: '40', component: Tutorial40Component },
    { path: '41', component: Tutorial41Component },
    { path: '42', component: Tutorial42Component },
    { path: '43', component: Tutorial43Component },
    { path: '44', component: Tutorial44Component },
    {
      path: '45', component: Tutorial45Component, children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
        { path: 'page3', component: Page3Component }
      ]
    },
    { path: '46', component: Tutorial46Component },
    { path: '47', component: Tutorial47Component },
    { path: '48', component: Tutorial48Component },
    { path: '49', component: Tutorial49Component },
    { path: '50', component: Tutorial50Component },
    { path: '51', component: Tutorial51Component },
    { path: '52', component: Tutorial52Component },
    { path: '53', component: Tutorial53Component },
    { path: '54', component: Tutorial54Component },
    { path: '55', component: Tutorial55Component },
    { path: '56', component: Tutorial56Component },
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(tutorialRoutes)],
  exports: [RouterModule]
})
export class TutorialWisePracticeRoutingModule { }
