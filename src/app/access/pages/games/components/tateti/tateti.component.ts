import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  @Input() gameSelected!:Juego;
  
  constructor() { }

  ngOnInit(): void {
  }

}
