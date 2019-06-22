import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepensePieceComponent } from './edit-depense-piece.component';

describe('EditDepensePieceComponent', () => {
  let component: EditDepensePieceComponent;
  let fixture: ComponentFixture<EditDepensePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepensePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepensePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
