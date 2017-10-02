import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Rafael';

  adicionar(nome: string){
    console.log(nome);
    this.nome = nome;
  }

}
