import { Component } from '@angular/core';
import {Operation} from './operation';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  result: number = 0;
  operand1: number = 0;
  operand2: number = 0;
  operator: string = '+';



  calculate() {
    // = --> Affectation
    // == --> test 3al valeur
    // === --> test 3al valeur w type
    switch (this.operator) {
      case '+':
        this.result = this.operand1 + this.operand2;
        break;
      case '-':
        this.result = this.operand1 - this.operand2;
        break;
      case '*':
        this.result = this.operand1 * this.operand2;
        break;
      case '/':
        this.result = this.operand1 / this.operand2;
        break;
      default: this.result = 0;
    }
  }


}
