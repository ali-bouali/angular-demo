import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComp1Component } from './sub-comp1.component';

describe('SubComp1Component', () => {
  let component: SubComp1Component;
  let fixture: ComponentFixture<SubComp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubComp1Component]
    });
    fixture = TestBed.createComponent(SubComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
