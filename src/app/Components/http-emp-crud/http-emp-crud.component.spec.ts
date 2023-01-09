import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpEmpCrudComponent } from './http-emp-crud.component';

describe('HttpEmpCrudComponent', () => {
  let component: HttpEmpCrudComponent;
  let fixture: ComponentFixture<HttpEmpCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpEmpCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpEmpCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
