import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../access/pages/login/login.component';
import { RegisterComponent } from '../access/pages/register/register.component';
import { RegisterokComponent } from "../access/pages/registerok/registerok.component";
import { QuiensoyComponent } from '../general/pages/quiensoy/quiensoy.component';
import { ChatComponent } from './chat/chat.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { LoginerrorComponent } from './pages/loginerror/loginerror.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'juegos', component: JuegosComponent},
  {path:'about', component: QuiensoyComponent},
  {path:'chat', component: ChatComponent},
  {path:'encuesta', component: EncuestaComponent},
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
