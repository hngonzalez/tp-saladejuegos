import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {

  userData!:any;

  constructor() { 
    this.userData = localStorage;
  }

  ngOnInit(): void {
  }


}
