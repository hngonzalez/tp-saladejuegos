import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  rutaDeLaColeccion = 'users';
  referenciaAlaColeccion: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.referenciaAlaColeccion = db.collection(this.rutaDeLaColeccion);
   }


  /* =====Methods===== */
  CreateUser(newUser:User){
    this.referenciaAlaColeccion.add({
      name: newUser.name,
      password: newUser.password,
      pointsCur: 0,
      pointsGen: 0
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }


  getAllUsers()
  {
   
    
    /*this.referenciaAlaColeccion.get().then((snapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/
  }
}
