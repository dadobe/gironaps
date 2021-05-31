import { TestBed } from '@angular/core/testing';

import { BiketourService } from './biketour.service';

describe('BiketourService', () => {
  let service: BiketourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiketourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
