import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { TatetiComponent } from './components/tateti/tateti.component';
import { PptComponent } from './components/ppt/ppt.component';


@NgModule({
  declarations: [TatetiComponent, PptComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
