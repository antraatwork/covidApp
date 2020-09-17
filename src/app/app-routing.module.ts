import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
   
  {path:'mainpage' ,component:MainpageComponent },
  {path:'state', component:StateComponent},
  {path:'**', component:MainpageComponent},
  //by default,redirect to home component initially when there is no path 
  {path:'',redirectTo:'/mainpage',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

export const routingComponent = [MainpageComponent,StateComponent]
