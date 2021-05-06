import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from '../../../services/registeruser.service'
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from "../../../models/user";
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:string = 'A';
  nUser:any;

  /* ====Constructor=== */
  constructor(private afAuth:AngularFireAuth, 
              private db:AngularFirestore,
              private registerUser:RegisteruserService, 
              private router: Router) {
    
   }

  ngOnInit(): void {
    
  }

  /* ============================================= */
  /* ================== Methods ================== */
  Register(){
    var usrTxt = document.getElementById('usrTxt');
    var passTxt = document.getElementById('passTxt');
    var newUser = new User((<HTMLInputElement>usrTxt).value,(<HTMLInputElement>passTxt).value);
    
    this.registerUser.CreateUserWithID(newUser);

    this.router.navigate(['registerok']);
  }

  RegisterFireAuth(){
    var usrTxt = document.getElementById('usrTxt');
    var passTxt = document.getElementById('passTxt');
    var newUser = new User((<HTMLInputElement>usrTxt).value,(<HTMLInputElement>passTxt).value);

    this.afAuth.createUserWithEmailAndPassword(newUser.name,newUser.password)
      .then( userCredential => {
        this.nUser = newUser;
        //console.log(userCredential);
        /*userCredential.user?.updateProfile({
          displayName: 'a'
        });*/
  
        this.InsertDataFireAuth(userCredential)
          .then(()=> {
            //console.log('cambio pag');
            this.InsertoEncuesta(userCredential);
            this.router.navigate(['registerok']);
          })
      })
  }

  InsertDataFireAuth(userCredential: firebase.auth.UserCredential){

    var nusr = new User(this.nUser.name, this.nUser.password)

    return this.db.doc(`users/${userCredential.user?.uid}`).set({
      /*email: this.nUser.name,
      password: this.nUser.password*/
      ...nusr
    });
  }

  InsertoEncuesta(userCredential: firebase.auth.UserCredential) {
    this.db.doc(`users/${userCredential.user?.uid}`).collection('encuesta').doc('DatosEncuesta').set({
      apellido: '',
      nombre: '',
      edad: '',
      sexo: '',
      telefono: '',
    });
  }
}
