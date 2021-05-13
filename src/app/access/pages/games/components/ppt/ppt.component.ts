import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from 'src/app/services/registeruser.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  opciones!:string[];
  opPC!:string;
  gano:boolean = false;
  puntaje!:number;
  ultimoJuego!:Date;

  constructor(private regis:RegisteruserService) { 
    this.opciones = ['piedra','papel','tijera'];
    this.puntaje = Number(localStorage.getItem('pointsGenPPT'));
    
  }

  ngOnInit(): void {
  }

  SeleccionJugador(option:string) {
    this.ultimoJuego = new Date();
    var selectedPC = this.SeleccionPC();
    this.gano = false;
    this.Comparacion(selectedPC, option);
    this.GuardarPuntaje();
  }

  SeleccionPC() {
    var selPC = this.opciones[Math.floor(Math.random() * this.opciones.length)];
    //console.log(selPC);
    this.opPC = selPC;
    return selPC;
  }

  Comparacion(pc:string,user:string){
    this.gano = false;
    if (user == pc) {
      console.log(user + " " + pc);
      console.log("empato");
    } else {
      switch (user) {
        case "piedra":
            if (pc == "papel") {
              console.log(user + " " + pc);
              console.log("perdiste");
            } else {
              console.log(user + " " + pc);
              console.log("ganaste");
              this.puntaje = this.puntaje + 1;
              this.gano = true;
            }
          break;

        case "papel":
            if (pc == "tijera") {
              console.log(user + " " + pc);
              console.log("perdiste");
            } else {
              console.log(user + " " + pc);
              console.log("ganaste");
              this.puntaje = this.puntaje + 1;
              this.gano = true;
            }
          break;
        case "tijera":
            if (pc == "piedra") {
              console.log(user + " " + pc);
              console.log("perdiste");
            } else {
              console.log(user + " " + pc);
              console.log("ganaste");
              this.puntaje = this.puntaje + 1;
              this.gano = true;
            }
          break;
        default:
          break;
      }
    }

    this.GuardarPuntaje(); 
    return
  }

  GuardarPuntaje() {
    var idDoc = String(localStorage.getItem('idDoc'));
    var docRef = this.regis.referenciaAlaColeccion.doc(idDoc);
    docRef.get().subscribe( usersData => { 
      //localStorage.setItem('pointsGenPPT',<string>usersData.data().pointsGen);
    });
        
    docRef.update({
      pointsGenPPT: this.puntaje,
      ultiJuegopPPT: this.ultimoJuego
    });
  }

  NuevaPartida() {
    this.gano = false;
  }
}
