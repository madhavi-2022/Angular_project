import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompntComponent } from './formcompnt.component';

describe('FormcompntComponent', () => {
  let component: FormcompntComponent;
  let fixture: ComponentFixture<FormcompntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcompntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcompntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
