import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { TatetiComponent } from './components/tateti/tateti.component';
import { PptComponent } from './components/ppt/ppt.component';
import { ChatComponent } from '../../components/chat/chat.component';
import { QuiensoyComponent } from 'src/app/general/pages/quiensoy/quiensoy.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';


@NgModule({
  declarations: [TatetiComponent, 
    PptComponent,
    ChatComponent,
    QuiensoyComponent,
    MemotestComponent,
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
