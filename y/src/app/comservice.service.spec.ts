import { TestBed } from '@angular/core/testing';

import { ComserviceService } from './comservice.service';

describe('ComserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComserviceService = TestBed.get(ComserviceService);
    expect(service).toBeTruthy();
  });
});
