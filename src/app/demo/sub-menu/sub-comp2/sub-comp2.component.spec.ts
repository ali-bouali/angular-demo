import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComp2Component } from './sub-comp2.component';

describe('SubComp2Component', () => {
  let component: SubComp2Component;
  let fixture: ComponentFixture<SubComp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubComp2Component]
    });
    fixture = TestBed.createComponent(SubComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
