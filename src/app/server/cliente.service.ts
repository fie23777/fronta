import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class ClienteService {

  constructor(private http:Http) {

    let url:string;
    
       url = `${environment.cliente}/panel`;
  
   }
   getPost(){
    return this.http.get(`${environment.cliente}`).map(result => result.json())
   }
 
 

}
