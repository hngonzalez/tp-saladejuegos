import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from "../../../services/registeruser.service";
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;

  constructor(private registerUser:RegisteruserService,
              private loginUser:AuthService) {

   }

  ngOnInit(): void {
    
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
}

