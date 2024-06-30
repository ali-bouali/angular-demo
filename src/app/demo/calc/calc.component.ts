import { Component } from '@angular/core';
import {Operation} from './operation';
import {CalculatorService} from '../services/calculator/calculator.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  result: number = 0;
  operation: Operation = {};


  constructor(
    // pour injecter une dep: --> {visibilite (provate / public)} {nom_variable} : {TypeDuService == esem l classe elli t7ebb tinjecteha}
    private service: CalculatorService
  ) {}


  calculate() {
    // const --> 7aja constante w na3ref enni ma 3adech bech tetbaddel
    // let --> na3ref ennou l variable mte3i bech n3awed na3mellha affectation
    // var --> nafs chay kima let amma TS yrecommendi ennek testa3mel dima le mot cle let
    this.result = this.service.calculate(this.operation);

  }


}
