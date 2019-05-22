import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypePieceComponent } from './list-type-piece.component';

describe('ListTypePieceComponent', () => {
  let component: ListTypePieceComponent;
  let fixture: ComponentFixture<ListTypePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
