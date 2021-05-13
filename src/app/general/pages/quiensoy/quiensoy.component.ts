import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {

  userData!:any;

  constructor(private auth:AuthService) { 
    auth.getUpdatedData();
    this.userData = localStorage;
    
  }

  ngOnInit(): void {
  }


}
