import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent {
  n = 0;

  @Output()
  private btnClicked: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  title: string = '';

  @Input()
  severity='primary';

  clickMe() {
    this.n++;
    this.btnClicked.emit(this.n);
  }
}
