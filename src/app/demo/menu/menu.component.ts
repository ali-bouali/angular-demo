import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  id = 1234234234;
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
    // l Query params yet3addou fel URL --> http://localhost:4200/url-mte3i?param1=value1&param2=value2&param3=value3&param_n=value_n
    // ma 3andich limite fel nombre de parametres elli najem n3addigon ==> la seule limite heyya toul l URL mte3i
    // this.router.navigate(['my-form'], {queryParams: {email: 'test@mail.com', username: 'ali'}});

    // bech ykoun ==> http://localhost:4200/url_mte3i/VARIABLE/b9yet-url
    this.router.navigate(['main', 'my-form', this.id, 'edit']);
  }
}
