import { TestBed } from '@angular/core/testing';

import { EnergieService } from './energie.service';

describe('EnergieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnergieService = TestBed.get(EnergieService);
    expect(service).toBeTruthy();
  });
});
