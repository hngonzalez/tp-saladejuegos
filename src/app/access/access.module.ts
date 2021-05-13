import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterokComponent } from './pages/registerok/registerok.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { GameComponent } from './components/game/game.component';
import { LoginerrorComponent } from './pages/loginerror/loginerror.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [LoginComponent,
    RegisterComponent, 
    RegisterokComponent,
    JuegosComponent,
    GameComponent,
    LoginerrorComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccessModule { }
