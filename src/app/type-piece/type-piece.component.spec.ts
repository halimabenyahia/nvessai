import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePieceComponent } from './type-piece.component';

describe('TypePieceComponent', () => {
  let component: TypePieceComponent;
  let fixture: ComponentFixture<TypePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
