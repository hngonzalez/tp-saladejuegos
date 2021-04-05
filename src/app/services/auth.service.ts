import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dbpath = '/users';
  usersCollec:AngularFirestoreCollection<any>;

  


  /* ======= Constructor del servicio de auth ======= */
  constructor(private db:AngularFirestore) {
    this.usersCollec = db.collection(this.dbpath);

  }


  /* ======= Methods ======= */
}
