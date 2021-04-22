import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImgsMemotestService {
  
  private query!:string;
  private api_key:string = environment.PIXABAY_API_KEY;
  private api_url:string = environment.PIXABAY_API_URL;
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
