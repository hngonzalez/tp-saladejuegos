import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImgsMemotestService {
  
  private query!:string;
  private api_key:string = '21255120-7671723e9c3d75878e3e5a6de'
  private api_url:string = 'https://pixabay.com/api/?key='
  private URL:string = this.api_url + this.api_key + '&q=';
  private imgList:any[] = new Array<any>();

  /* CONSTRUCTORS <========================================================== */
  constructor(private _http: HttpClient) { 
  }


  /* METHODS <========================================================== */
  searchImg(query:string) {
    this._http.get(this.URL + query).subscribe(
      data => this.loadImgList(data)
    );

    return this.imgList;
  }

  loadImgList(data:any) {
    for (let i = 0; i < 6; i++) {
      //console.log(data.hits[i]);
      this.imgList.push(data.hits[i]);
      this.imgList.push(data.hits[i]);
      //console.log(data.hits[0].previewURL);
      //console.log(this.imgList);
    }
  }


}
