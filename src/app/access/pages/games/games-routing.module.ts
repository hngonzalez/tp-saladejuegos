import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { PptComponent } from './components/ppt/ppt.component';
import { TatetiComponent } from './components/tateti/tateti.component';

const routes: Routes = [
  {path:'tateti', component: TatetiComponent},
  {path:'ppt', component: PptComponent},
  {path:'memotest', component: MemotestComponent},
  {path:'ahorcado', component: AhorcadoComponent},
  {path:'', redirectTo: 'tateti', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
