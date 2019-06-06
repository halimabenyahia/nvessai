import { TestBed } from '@angular/core/testing';

import { TypeEntretienService } from './type-entretien.service';

describe('TypeEntretienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeEntretienService = TestBed.get(TypeEntretienService);
    expect(service).toBeTruthy();
  });
});
