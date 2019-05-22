import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTypePieceComponent } from './info-type-piece.component';

describe('InfoTypePieceComponent', () => {
  let component: InfoTypePieceComponent;
  let fixture: ComponentFixture<InfoTypePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTypePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTypePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
