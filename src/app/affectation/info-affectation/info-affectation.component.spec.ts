import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAffectationComponent } from './info-affectation.component';

describe('InfoAffectationComponent', () => {
  let component: InfoAffectationComponent;
  let fixture: ComponentFixture<InfoAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
