import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractjobComponent } from './contractjob.component';

describe('ContractjobComponent', () => {
  let component: ContractjobComponent;
  let fixture: ComponentFixture<ContractjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
