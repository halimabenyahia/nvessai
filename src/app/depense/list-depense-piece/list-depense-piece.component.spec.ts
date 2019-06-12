import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepensePieceComponent } from './list-depense-piece.component';

describe('ListDepensePieceComponent', () => {
  let component: ListDepensePieceComponent;
  let fixture: ComponentFixture<ListDepensePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepensePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepensePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
