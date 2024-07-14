import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesComponent } from './all-categories.component';

describe('AllCategoriesComponent', () => {
  let component: AllCategoriesComponent;
  let fixture: ComponentFixture<AllCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCategoriesComponent]
    });
    fixture = TestBed.createComponent(AllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
