import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {
  constructor() { }



  loggedIn(){
    return !!localStorage.getItem('access_token');
  }
}
