import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  email = 'empty@mail.com';
  username = 'no-user-name';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngAfterContentInit(): void {
    alert('view has been initialized');
  }

  ngAfterViewInit(): void {
    alert('Content has been initialized');
  }

  ngOnDestroy(): void {
    alert('cmp has been destroyed');
  }

  ngOnInit(): void {
    alert('cmp has been initialized');
  }
}
