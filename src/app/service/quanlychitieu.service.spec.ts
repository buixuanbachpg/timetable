import { TestBed } from '@angular/core/testing';

import { QuanlychitieuService } from './quanlychitieu.service';

describe('QuanlychitieuService', () => {
  let service: QuanlychitieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuanlychitieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
