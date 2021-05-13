import { Component, OnInit } from '@angular/core';
import { MensajesFirestoreService } from "../../services/mensajes-firestore-service.service";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje:string = "";
  elemento:any;

  constructor(public _mfs:MensajesFirestoreService) { 
    this._mfs.cargarMensajes()
              .subscribe( () => {
                setTimeout( () => {
                  this.elemento.scrollTop = this.elemento.scrollHeight;
                },20 );
              });
  }

  ngOnInit(): void {
    this.elemento = <HTMLElement>document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length == 0) {
      return;
    }

    this._mfs.agregarMensaje(this.mensaje)
              .then( ()=>this.mensaje = "" )
              .catch( (err)=>console.log('Error al enviar', err) );

    
  }
}
