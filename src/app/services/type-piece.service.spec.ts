import { TestBed } from '@angular/core/testing';

import { TypePieceService } from './type-piece.service';

describe('TypePieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypePieceService = TestBed.get(TypePieceService);
    expect(service).toBeTruthy();
  });
});
