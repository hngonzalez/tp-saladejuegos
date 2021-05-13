import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensajes } from '../models/mensajes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensajesFirestoreService {

  private dbPath = '/message';

  MensajesRef: AngularFirestoreCollection<Mensajes>;
  private itemsColecction!:AngularFirestoreCollection<Mensajes>;
  public chats:Mensajes[] = [];
  constructor(private db: AngularFirestore) {
    this.MensajesRef = db.collection(this.dbPath);
  }

  cargarMensajes(){
    this.itemsColecction = this.db.collection<Mensajes>('messages', ref => ref.orderBy('fecha','desc')
                                                                              .limit(10));
    return this.itemsColecction.valueChanges()
    .pipe(
      map((mensajes:Mensajes[])=>{
        console.log(mensajes);
        this.chats = [];

        for( let mensaje of mensajes ){
          if (mensaje.uid == String(localStorage.getItem('idDoc'))) {
            mensaje.autor = true;
          }
          this.chats.unshift( mensaje );
          
        }
        //this.chats = mensajes;
        return this.chats;
      })
    )

}

  agregarMensaje(texto:string){
    console.log(localStorage);

    let mensaje:Mensajes = {
      nombre: String(localStorage.getItem('displayName')),
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: String(localStorage.getItem('idDoc'))
    }
    
    return this.itemsColecction.add(mensaje);
  }


  getAll(): AngularFirestoreCollection<Mensajes> {
    return this.MensajesRef;
  }

  create(mensajes: Mensajes): any {
    return this.MensajesRef.add({ ...mensajes });
  }

  update(id: string, data: any): Promise<void> {
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.MensajesRef.doc(id).delete();
  }
}
