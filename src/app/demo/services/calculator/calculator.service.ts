import { Injectable } from '@angular/core';
import {Operation} from '../../calc/operation';

@Injectable()
export class CalculatorService {

  constructor() { }

  calculate(operation: Operation): number {
    if (operation.operand1 && operation.operand2) {
      switch (operation.operator) {
        case '+':
          return this.add(operation.operand1, operation.operand2);
        case '-':
          return this.sub(operation.operand1, operation.operand2);
        case '*':
          return this.multiply(operation.operand1, operation.operand2);
        case '/':
          return this.divide(operation.operand1, operation.operand2);
        default: return 0;
      }
    }
    return 0;
  }

  add(a: number, b:number) {
    return a + b;
  }
  sub(a: number, b:number) {
    return a - b;
  }
  multiply(a: number, b:number) {
    return a * b;
  }
  divide(a: number, b:number) {
    return a / b;
  }
}
