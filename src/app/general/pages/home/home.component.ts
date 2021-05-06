import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Juego } from "../../../models/juego";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
      //console.log(user);
    }) 
  }

  Registro() {
    this.router.navigate(['register']);
  }
  
}
