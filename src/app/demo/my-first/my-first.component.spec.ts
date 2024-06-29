import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponent } from './my-first.component';

describe('MyFirstComponent', () => {
  let component: MyFirstComponent;
  let fixture: ComponentFixture<MyFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFirstComponent]
    });
    fixture = TestBed.createComponent(MyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
