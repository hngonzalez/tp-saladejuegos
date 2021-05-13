import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { GamesRoutingModule } from './games-routing.module';
import { TatetiComponent } from './components/tateti/tateti.component';
import { PptComponent } from './components/ppt/ppt.component';
import { QuiensoyComponent } from 'src/app/general/pages/quiensoy/quiensoy.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { GameCardComponent } from './components/memotest/game-card/game-card.component';



@NgModule({
  declarations: [TatetiComponent, 
    PptComponent,
    QuiensoyComponent,
    MemotestComponent,
    AhorcadoComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class GamesModule { }
