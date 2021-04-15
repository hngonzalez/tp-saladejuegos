import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../access/pages/login/login.component';
import { RegisterComponent } from '../access/pages/register/register.component';
import { RegisterokComponent } from "../access/pages/registerok/registerok.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'registerok', component: RegisterokComponent},
  {path:'games', loadChildren: () => 
                  import('./pages/games/games.module').then(m => m.GamesModule) },   
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
