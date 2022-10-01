import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from '../leads/leads.component';
import {HomeComponent} from '../home/home.component'

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'leads', component : LeadsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
