import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterokComponent } from './pages/registerok/registerok.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, RegisterokComponent, ChatComponent],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
