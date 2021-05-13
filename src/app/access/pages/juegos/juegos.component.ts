import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/models/juego';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  user: any;
  gamesAvailables:Juego[];
  veEncuesta:boolean = false;
  enc:boolean = false;

  constructor(private auth: AuthService, 
    private router: Router) {
this.gamesAvailables = [
{name: "tateti", description: "Un texto sobre el tateti"},
{name: "ppt", description: "Otro texto para el piedra papel o tijera"},
{name: "memotest", description: "Juego de memoria"},
{name: "ahorcado", description: "Adivina la palabra"}
];    
//console.log(typeof(localStorage.getItem('encuesta')))
this.veEncuesta = JSON.parse(localStorage.getItem('encuesta')!);
//console.log(this.veEncuesta);
}

  ngOnInit(): void {
  }

}
