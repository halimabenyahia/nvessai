import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTypeVehiculeComponent } from './info-type-vehicule.component';

describe('InfoTypeVehiculeComponent', () => {
  let component: InfoTypeVehiculeComponent;
  let fixture: ComponentFixture<InfoTypeVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTypeVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
