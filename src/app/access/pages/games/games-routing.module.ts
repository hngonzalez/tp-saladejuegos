import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './components/ppt/ppt.component';
import { TatetiComponent } from './components/tateti/tateti.component';

const routes: Routes = [
  {path:'tateti', component: TatetiComponent},
  {path:'ppt', component: PptComponent},
  {path:'', redirectTo: 'tateti', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
