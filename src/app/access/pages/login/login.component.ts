import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from "../../../services/registeruser.service";
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../models/user";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
  public forma!:FormGroup;

  constructor(private registerUser:RegisteruserService,
              private loginUser:AuthService,
              private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  Login(){
  /*  var usrTxt = document.getElementById('usrTxt');
    var passTxt = document.getElementById('passTxt');
    
    var newUser = new User((<HTMLInputElement>usrTxt).value,(<HTMLInputElement>passTxt).value);
*/
   // this.loginUser.searchUser(newUser);
  }

  LoginAuth(){
    var usrTxt = document.getElementById('usrTxt');
    var passTxt = document.getElementById('passTxt');
    var nUser = new User((<HTMLInputElement>usrTxt).value,(<HTMLInputElement>passTxt).value);

    this.loginUser.login(nUser.name, nUser.password);
  }
  
  LoginAuth2(){
    var usrTxt = 'naikido.gz@hotmail.com';
    var passTxt = '123456';
    var nUser = new User(usrTxt,passTxt);

    this.loginUser.login(nUser.name, nUser.password);
  }
}

