import { Component } from '@angular/core';
import {Operation} from './operation';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  result: number = 0;
  operation: Operation = {};



  calculate() {
    // = --> Affectation
    // == --> test 3al valeur
    // === --> test 3al valeur w type

    // if (string){...} --> if string mte3 mehich null w mahich undefined
    // --> ma nest7a9ech n7ott l field === undefined || field === null
    // --> '2' is not undefined
    if (this.operation.operand1 && this.operation.operand2) {
      switch (this.operation.operator) {
        case '+':
          this.result = this.operation.operand1 + this.operation.operand2;
          break;
        case '-':
          this.result = this.operation.operand1 - this.operation.operand2;
          break;
        case '*':
          this.result = this.operation.operand1 * this.operation.operand2;
          break;
        case '/':
          this.result = this.operation.operand1 / this.operation.operand2;
          break;
        default: this.result = 0;
      }

    }
  }


}
