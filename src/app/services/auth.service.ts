import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import firebase from "firebase/app";
import "firebase/auth";
import { User } from "../models/user";
import { RegisteruserService } from './registeruser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router,
              private regis:RegisteruserService) { }

  getUserState() {
    return this.afAuth.authState;
  }

  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          var idDoc = userCredential.user?.uid;
          
          this.setLocalStorage(userCredential, String(idDoc));

          this.router.navigate(['/home']);
          
          //console.log(userCredential.user?.uid);
          //localStorage.setItem('');
        }
      })
  }

  createUser() {
    var usrTxt = document.getElementById('usrTxt');
    var passTxt = document.getElementById('passTxt');
    var nUser = new User((<HTMLInputElement>usrTxt).value,(<HTMLInputElement>passTxt).value);
    //console.log(nUser);
    this.afAuth.createUserWithEmailAndPassword( nUser.name, nUser.password)
      .then( userCredential => {
        this.newUser = nUser;
        //console.log(userCredential);
        userCredential.user?.updateProfile( {
          
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/home']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user?.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'network user'
    })
  }

  logout() {
    localStorage.clear();
    return this.afAuth.signOut();
  }

  setLocalStorage(userCredential:firebase.auth.UserCredential, idDoc:string){
    var docRef = this.regis.referenciaAlaColeccion.doc(idDoc);
    docRef.get().subscribe( usersData => { 

      /* Seteo el localStorage */
      localStorage.setItem('idDoc', idDoc);
      localStorage.setItem('displayName', usersData.data().name);
      localStorage.setItem('photoURL', String(userCredential.user?.photoURL));
      localStorage.setItem('mailVerified', String(userCredential.user?.emailVerified));
      localStorage.setItem('lastSignInTime', String(userCredential.user?.metadata.lastSignInTime));
      localStorage.setItem('pointsGenPPT', String(usersData.data().pointsGenPPT));
      localStorage.setItem('pointsGenTTT', String(usersData.data().pointsGenTTT));
      localStorage.setItem('encuesta', usersData.data().encuesta);      
      
      console.log(localStorage)
      //console.log(usersData.data());
      
    });    
  }
}