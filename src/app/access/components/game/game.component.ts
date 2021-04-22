import { Component, Input, OnInit } from '@angular/core';
import { Juego } from "../../../models/juego";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() gamesAvailable!:Juego[];

  constructor() { }

  ngOnInit(): void {
  }

}
