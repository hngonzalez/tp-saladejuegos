import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService, 
              private router: Router) { }

  ngOnInit(): void {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
      //console.log(user);
    })
  }

  logout(){
    this.auth.logout();
  }
}
