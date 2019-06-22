import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDepensePieceComponent } from './info-depense-piece.component';

describe('InfoDepensePieceComponent', () => {
  let component: InfoDepensePieceComponent;
  let fixture: ComponentFixture<InfoDepensePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDepensePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDepensePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
