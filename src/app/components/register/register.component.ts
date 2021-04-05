import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from '../../services/registeruser.service'
import { User } from "../../models/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:string = 'A';

  /* ====Constructor=== */
  constructor(private registerUser:RegisteruserService, private router: Router) {
    console.log();
   }

  ngOnInit(): void {
    
  }

  /* ====Methods=== */
  Register(){
    var usrTxt = document.getElementById('usrTxt');
    var passTxt = document.getElementById('passTxt');
    var newUser = new User((<HTMLInputElement>usrTxt).value,(<HTMLInputElement>passTxt).value);
    
    this.registerUser.CreateUser(newUser);

    
  }
}
