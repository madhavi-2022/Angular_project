import { TestBed } from '@angular/core/testing';

import { HttpEmpCrudService } from './http-emp-crud.service';

describe('HttpEmpCrudService', () => {
  let service: HttpEmpCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmpCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
