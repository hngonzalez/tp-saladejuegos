import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private dbpath = '/messages';
  msgRef:AngularFirestoreCollection<any>;

  constructor(private db:AngularFirestore) { 
    this.msgRef = db.collection(this.dbpath);
  }


  /* ======= Methods ======= */
  getAll():AngularFirestoreCollection<any>{
    return this.msgRef;
  }

  create(msg:any):any {
    return this.msgRef.add(msg);
  }
}
