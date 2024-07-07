import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router: Router
  ) {}

  /**
   * kifech najem na3mel navigation par programmation
   * 1- nzid click event 3al HTML tag mte3i (yjanem ykoun ayy 7aja clickable)
   * 2- na3mel injection lel Router mel package (@angular/router) --> el package mouhem 3allekher sinon ma yemchich
   * 3- twa najem nesta3mel this.router.navigate(['list', 'of'; 'url', 'segment']) wella n7ott l url kemel
   *
   */
  navigateToNewLink() {
    // koll url segement bech yzidha '/' --> new-link/clicked
    this.router.navigate(['new-link', 'clicked']);
  }
}
