import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCRUD1Component } from './employee-crud1.component';

describe('EmployeeCRUD1Component', () => {
  let component: EmployeeCRUD1Component;
  let fixture: ComponentFixture<EmployeeCRUD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCRUD1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
