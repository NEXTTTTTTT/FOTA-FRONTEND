import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  URL = "https://fota2022.herokuapp.com/api/v1/employee"
  result:any;
   
  userName : any = new BehaviorSubject(localStorage.getItem('userName'));
  constructor(public http:HttpClient) { }

  login(object:any):Observable<any>
  {
   return this.http.post(this.URL+"/login",object);
  }

  getAll():Observable<any>
  {
    return this.http.get(this.URL+"/all")
  }
  addEmp(object:any):Observable<any>
  {
   return this.http.post(this.URL+"/create",object);
  }


  editEmp(object:any):Observable<any>
  {
   return this.http.patch(this.URL+"/update",object);
  }


  deleteEmp(username:any):Observable<any>
  {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        username: username
      },
    };
   return this.http.delete(this.URL+"/delete",options);
  }
}
