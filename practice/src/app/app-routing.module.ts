import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { HomeComponent } from './tutorial-wise-practice/home/home.component';
import { PageNotFoundComponent } from './tutorial-wise-practice/page-not-found/page-not-found.component';
import { UserRoutingModule } from './user/user-routing.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tutorial', loadChildren:()=>import("./tutorial-wise-practice/tutorial-wise-practice.module").then(mod=>mod.TutorialWisePracticeModule)},
  {path: 'admin1',loadChildren:()=>import("../app/admin1/admin1.module").then(mod=>mod.Admin1Module)},
  {path: 'user1',loadChildren:()=>import("../app/user1/user1.module").then(mod=>mod.User1Module)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserRoutingModule,AdminRoutingModule],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
