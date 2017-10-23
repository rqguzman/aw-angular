import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Thiago';
  adicionado = false;
  funcionarios = [];

  adicionar() {
    // console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

}
