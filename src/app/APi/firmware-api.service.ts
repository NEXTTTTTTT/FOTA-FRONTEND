import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirmwareApiService {
  createURL = "https://fota2022.herokuapp.com/api/v1/firmware/create"
  getURL = "https://fota2022.herokuapp.com/api/v1/firmware/all"
  latestURL = "https://fota2022.herokuapp.com/api/v1/latest/firmware"

  constructor(public http:HttpClient) { }


  
  getData():Observable<any>
  {
   return this.http.get(this.getURL);
  }

  latestFirmware():Observable<any>
  {
   return this.http.get(this.latestURL);
  }
  
  addFirmware(object:any):Observable<any>
  {
   return this.http.post(this.createURL,object);
  }
}
