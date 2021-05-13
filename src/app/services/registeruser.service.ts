import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  private dbPath = 'users';
  referenciaAlaColeccion: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.referenciaAlaColeccion = db.collection(this.dbPath);
   }


  /* =====Methods===== */
  CreateUser(newUser:User){
    //Forma con ...
    this.referenciaAlaColeccion.add(({...newUser}))
    .then((docRef) => {
        //console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        //console.error("Error adding document: ", error);
    });

    //Forma sin ...
    /*this.referenciaAlaColeccion.add(({
      name: newUser.name,
      password: newUser.password,
      pointsCur: 0,
      pointsGen: 0
    }))
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });*/
  }

  CreateUserWithID(newUser:User){
    this.referenciaAlaColeccion.doc(newUser.name).set(({
      name: newUser.name,
      password: newUser.password,
      pointsCur: 0,
      pointsGen: 0,
      pointsGenPPT: 0
    }))
    .then((dofref) => {
      //console.log(dofref);
        console.log("Document written with ID: ", newUser.name);
    })
    .catch((error) => {
        console.error("Error adding document: ", newUser.name);
    });
  }
}
