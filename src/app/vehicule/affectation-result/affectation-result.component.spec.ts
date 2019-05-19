import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationResultComponent } from './affectation-result.component';

describe('AffectationResultComponent', () => {
  let component: AffectationResultComponent;
  let fixture: ComponentFixture<AffectationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
