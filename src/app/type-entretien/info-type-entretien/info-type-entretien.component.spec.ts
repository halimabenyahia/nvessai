import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTypeEntretienComponent } from './info-type-entretien.component';

describe('InfoTypeEntretienComponent', () => {
  let component: InfoTypeEntretienComponent;
  let fixture: ComponentFixture<InfoTypeEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTypeEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTypeEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
