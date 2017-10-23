import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {
  
  @Input() funcionarioRecebido: any;

  getEstilosCartao(){
    return {
      'border-width.px': this.funcionarioRecebido.id ,
      'background-color': this.funcionarioRecebido.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }
}
