import {Component} from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {

  constructor() {
  }
  isTabActive(tabName: string): boolean {
    // const urlSegments = window.location.href.split('/')
     return window.location.href.includes(tabName);
  }

}
