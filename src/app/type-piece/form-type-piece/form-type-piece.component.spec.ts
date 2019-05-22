import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypePieceComponent } from './form-type-piece.component';

describe('FormTypePieceComponent', () => {
  let component: FormTypePieceComponent;
  let fixture: ComponentFixture<FormTypePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
