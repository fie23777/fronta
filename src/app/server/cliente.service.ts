import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class ClienteService {

  constructor(private http:Http) { }

  getPost(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts').map(result => result.json())
  }

}