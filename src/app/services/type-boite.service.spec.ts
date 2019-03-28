import { TestBed } from '@angular/core/testing';

import { TypeBoiteService } from './type-boite.service';

describe('TypeBoiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeBoiteService = TestBed.get(TypeBoiteService);
    expect(service).toBeTruthy();
  });
});
