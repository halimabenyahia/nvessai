import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumDepensePieceComponent } from './sum-depense-piece.component';

describe('SumDepensePieceComponent', () => {
  let component: SumDepensePieceComponent;
  let fixture: ComponentFixture<SumDepensePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumDepensePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumDepensePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
