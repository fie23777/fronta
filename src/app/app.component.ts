import { Component } from '@angular/core';
import {ClienteService} from './server/cliente.service';
import { Cliente } from './cliente/cliente';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ClienteService],
})
export class AppComponent {
   title:string;
   dados:any

  constructor(private cliService:ClienteService){
     this.title = "Clientes";
    this.cliService.getPost().subscribe(posts => console.log(posts))

    this.cliService.getPost().subscribe(posts => {this.dados = posts.data})

  }
}
