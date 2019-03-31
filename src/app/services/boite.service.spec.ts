import { TestBed } from '@angular/core/testing';

import { BoiteService } from './boite.service';

describe('BoiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoiteService = TestBed.get(BoiteService);
    expect(service).toBeTruthy();
  });
});
