import { TestBed } from '@angular/core/testing';

import { TypeDepenseService } from './type-depense.service';

describe('TypeDepenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDepenseService = TestBed.get(TypeDepenseService);
    expect(service).toBeTruthy();
  });
});
