import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryproductdetailsComponent } from './queryproductdetails.component';

describe('QueryproductdetailsComponent', () => {
  let component: QueryproductdetailsComponent;
  let fixture: ComponentFixture<QueryproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryproductdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
