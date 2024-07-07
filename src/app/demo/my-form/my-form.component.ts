import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit { //, OnDestroy, AfterViewInit, AfterContentInit {

  email = 'empty@mail.com';
  username = 'no-user-name';
  userId = 0;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngAfterContentInit(): void {
    // alert('view has been initialized');
  }

  ngAfterViewInit(): void {
    // alert('Content has been initialized');
  }

  ngOnDestroy(): void {
    // alert('cmp has been destroyed');
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.email = this.activatedRoute.snapshot.queryParams['email'];
    this.username = this.activatedRoute.snapshot.queryParams['username'];

    this.userId = this.activatedRoute.snapshot.params['id'];
  }
}
