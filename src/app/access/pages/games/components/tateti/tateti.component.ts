import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { RegisteruserService } from 'src/app/services/registeruser.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  @Input() gameSelected!:Juego;
  posiciones=[['-','-','-'],
  ['-','-','-'],
  ['-','-','-']];
  jugador='O';
  puntajeTTT!:number;
  puntajeGenTTT!:number;
  ultimoJuego:Date = new Date();
  
  constructor(private regis:RegisteruserService) {
    this.puntajeTTT = Number(localStorage.getItem('pointsGenTTT'));
   }

  ngOnInit(): void {
  }    

  presion(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  reiniciar() {
    this.puntajeTTT = 0;
    for(let f=0;f<3;f++)
      for(let c=0;c<3;c++)
        this.posiciones[f][c]='-';
  }

  cambiarJugador() {
    if (this.jugador=='O')
      this.jugador='X';
    else
      this.jugador='O';    
  }

  verificarGano(ficha: string) {
    if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
      
    if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
      
    if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
    if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
    if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
    if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
    if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
    if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha){
      alert('Gano:'+ficha);
      this.puntajeTTT++; 
      this.puntajeGenTTT = (Number(localStorage.getItem('pointsGenTTT')) + 1);
      this.GuardarPuntaje();
    }
  }

  GuardarPuntaje() {
    var idDoc = String(localStorage.getItem('idDoc'));
    var docRef = this.regis.referenciaAlaColeccion.doc(idDoc);
    docRef.get().subscribe( usersData => { 
      localStorage.setItem('pointsGenTTT',String(usersData.data().pointsGenTTT));
    });
        
    docRef.update({
      pointsGenTTT: Number(this.puntajeGenTTT),
      ultiJuegopTTT: this.ultimoJuego
    });
  }
}
