import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPieceComponent } from './info-piece.component';

describe('InfoPieceComponent', () => {
  let component: InfoPieceComponent;
  let fixture: ComponentFixture<InfoPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
