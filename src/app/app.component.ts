import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberOfClicks = 0;

  handleChildEvent(number: number) {
    this.numberOfClicks = number;
  }
}
