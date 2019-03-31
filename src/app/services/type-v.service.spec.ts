import { TestBed } from '@angular/core/testing';

import { TypeVService } from './type-v.service';

describe('TypeVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeVService = TestBed.get(TypeVService);
    expect(service).toBeTruthy();
  });
});
