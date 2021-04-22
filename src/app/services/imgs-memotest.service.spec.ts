import { TestBed } from '@angular/core/testing';

import { ImgsMemotestService } from './imgs-memotest.service';

describe('ImgsMemotestService', () => {
  let service: ImgsMemotestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgsMemotestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
