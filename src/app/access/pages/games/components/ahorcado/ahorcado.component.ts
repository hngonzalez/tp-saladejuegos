import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from 'src/app/services/registeruser.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  puntaje!:number
  palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
  palabra = "";
  rand:any;
  oculta:any = [];
  hueco = document.getElementById("palabra");
  cont = 6;
  buttons = document.getElementsByClassName('letra');
  btnInicio = document.getElementById("reset");

  constructor(private regis:RegisteruserService) {
    this.puntaje = Number(localStorage.getItem('pointsGenAHO'));
   }

  ngOnInit(): void {
  }

  generaPalabra() {
    this.rand = (Math.random() * 19).toFixed(0);
    this.palabra = this.palabras[this.rand][0].toUpperCase();
    console.log(this.palabra);
  }
  
  // Funcion para pintar los guiones de la palabra
  pintarGuiones(num:number) {
    for (var i = 0; i < num; i++) {
      this.oculta[i] = "_";
    }
    (<HTMLInputElement>document.getElementById("palabra"))!.innerHTML = this.oculta.join("");
  }
  
  //Generar abecedario
  generaABC (a:string,z:string) {
    (<HTMLInputElement>document.getElementById("abcdario"))!.innerHTML = "";
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letra = "";
    for( ; i<=j; i++) {
      letra = String.fromCharCode(i).toUpperCase();
      (<HTMLInputElement>document.getElementById("abcdario")!).innerHTML += '<button value="' + letra + '"  class="letra" id="'+letra+'">' + letra + '</button>';
      if(i==110) {
        (<HTMLInputElement>document.getElementById("abcdario"))!.innerHTML += "<button value='Ñ' (click)='intento(Ñ)' class='letra' id='"+letra+"'>Ñ</button>";
      }
    }
    console.log(document.getElementById("abcdario")!.innerHTML);

    //document.getElementById('A')!.onclick = this.intento;
    document.getElementById('A')?.addEventListener('click', ()=> {
      this.intento('A');
    });
    document.getElementById('B')?.addEventListener('click', ()=> {
      this.intento('B');
    });
    document.getElementById('C')?.addEventListener('click', ()=> {
      this.intento('C');
    });
    document.getElementById('D')?.addEventListener('click', ()=> {
      this.intento('D');
    });
    document.getElementById('E')?.addEventListener('click', ()=> {
      this.intento('E');
    });
    document.getElementById('F')?.addEventListener('click', ()=> {
      this.intento('F');
    });
    document.getElementById('G')?.addEventListener('click', ()=> {
      this.intento('G');
    });
    document.getElementById('H')?.addEventListener('click', ()=> {
      this.intento('H');
    });
    document.getElementById('I')?.addEventListener('click', ()=> {
      this.intento('I');
    });
    document.getElementById('J')?.addEventListener('click', ()=> {
      this.intento('J');
    });
    document.getElementById('K')?.addEventListener('click', ()=> {
      this.intento('K');
    });
    document.getElementById('L')?.addEventListener('click', ()=> {
      this.intento('L');
    });
    document.getElementById('M')?.addEventListener('click', ()=> {
      this.intento('M');
    });
    document.getElementById('N')?.addEventListener('click', ()=> {
      this.intento('N');
    });
    document.getElementById('O')?.addEventListener('click', ()=> {
      this.intento('O');
    });
    document.getElementById('P')?.addEventListener('click', ()=> {
      this.intento('P');
    });
    document.getElementById('P')?.addEventListener('click', ()=> {
      this.intento('P');
    });
    document.getElementById('Q')?.addEventListener('click', ()=> {
      this.intento('Q');
    });
    document.getElementById('R')?.addEventListener('click', ()=> {
      this.intento('R');
    });
    document.getElementById('S')?.addEventListener('click', ()=> {
      this.intento('S');
    });
    document.getElementById('T')?.addEventListener('click', ()=> {
      this.intento('T');
    });
    document.getElementById('U')?.addEventListener('click', ()=> {
      this.intento('U');
    });
    document.getElementById('V')?.addEventListener('click', ()=> {
      this.intento('V');
    });
    document.getElementById('W')?.addEventListener('click', ()=> {
      this.intento('W');
    });
    document.getElementById('X')?.addEventListener('click', ()=> {
      this.intento('X');
    });
    document.getElementById('Y')?.addEventListener('click', ()=> {
      this.intento('Y');
    });
    document.getElementById('Z')?.addEventListener('click', ()=> {
      this.intento('Z');
    });
  }
  
  // Chequear intento
  intento(letra:string) {
    (<HTMLInputElement>document.getElementById(letra)).disabled = true;
    if(this.palabra.indexOf(letra) != -1) {
      for(var i=0; i<this.palabra.length; i++) {
        if(this.palabra[i]==letra) this.oculta[i] = letra;
      }
      (<HTMLInputElement>document.getElementById("palabra")).innerHTML = this.oculta.join("");
    }else{
      this.cont--;
      (<HTMLInputElement>document.getElementById("intentos"))!.innerHTML = String(this.cont);
      (<HTMLInputElement>document.getElementById("acierto"))!.innerHTML = "Fallo!";
      (<HTMLInputElement>document.getElementById("acierto")).className += "acierto rojo";
      (<HTMLInputElement>document.getElementById("image"+this.cont)).className += "fade-in";
    }
    this.compruebaFin();
    setTimeout(function () { 
      (<HTMLInputElement>document.getElementById("acierto")).className = ""; 
    }, 800);
  }
  
  // Obtener pista
  pista() {
    (<HTMLInputElement>document.getElementById("hueco-pista"))!.innerHTML = this.palabras[this.rand][1];
  }
  
  // Compruba si ha finalizado
  compruebaFin() {
    if(this.oculta.indexOf("_") == -1 ) {
      (<HTMLInputElement>document.getElementById("msg-final"))!.innerHTML = "Felicidades !!";
      (<HTMLInputElement>document.getElementById("msg-final")).className += "zoom-in";
      (<HTMLInputElement>document.getElementById("palabra")).className += " encuadre";
      
      for (var i = 0; i < this.buttons.length; i++) {
        (<HTMLInputElement>this.buttons[i]).disabled = true;
      }
      (<HTMLInputElement>document.getElementById("reset"))!.innerHTML = "Empezar";
      (<HTMLInputElement>document.getElementById("reset")).onclick = function() { location.reload() };
    }else if( this.cont == 0 ) {
      (<HTMLInputElement>document.getElementById("msg-final"))!.innerHTML = "Game Over";
      (<HTMLInputElement>document.getElementById("msg-final")).className += "zoom-in";
      for (var i = 0; i < this.buttons.length; i++) {
        (<HTMLInputElement>this.buttons[i]).disabled = true;
      }
      (<HTMLInputElement>document.getElementById("reset"))!.innerHTML = "Empezar";
      (<HTMLInputElement>document.getElementById("reset")).onclick = function () { location.reload() };
    }
  }
  
  // Restablecer juego
  inicio() {
    this.generaPalabra();
    this.pintarGuiones(this.palabra.length);
    this.generaABC("a","z");
    this.cont = 6;
    (<HTMLInputElement>document.getElementById("intentos"))!.innerHTML=String(this.cont);
  }
  

}

