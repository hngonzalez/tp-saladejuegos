import { Component, OnInit } from '@angular/core';
import { ImgsMemotestService } from "../../../../../services/imgs-memotest.service";

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  imgList:any[] = new Array<any>();


  constructor(private imgService:ImgsMemotestService) {
    this.imgList = this.imgService.searchImg('animales');
    //console.log(this.imgList);
   }

  ngOnInit(): void {
  }

}
