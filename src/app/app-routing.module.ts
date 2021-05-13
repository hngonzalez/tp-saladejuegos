import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginerrorComponent } from './access/pages/loginerror/loginerror.component';
import { RegisterokComponent } from './access/pages/registerok/registerok.component';
import { HomeComponent } from './general/pages/home/home.component';
import { QuiensoyComponent } from './general/pages/quiensoy/quiensoy.component';

//path           -  component lo que va levantar
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'access', loadChildren: () => 
                  import('./access/access.module').then(m => m.AccessModule) },              
  {path:'registerok', component: RegisterokComponent},
  {path:'loginerror', component: LoginerrorComponent},
  {path:'**', component: HomeComponent},        /* Si no existe la ruta, nos redirecciona a un componente error */ 
  {path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
