import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEntretienComponent } from './info-entretien.component';

describe('InfoEntretienComponent', () => {
  let component: InfoEntretienComponent;
  let fixture: ComponentFixture<InfoEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
