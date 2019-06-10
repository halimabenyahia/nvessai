import { TestBed } from '@angular/core/testing';

import { DepensePieceService } from './depense-piece.service';

describe('DepensePieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepensePieceService = TestBed.get(DepensePieceService);
    expect(service).toBeTruthy();
  });
});
