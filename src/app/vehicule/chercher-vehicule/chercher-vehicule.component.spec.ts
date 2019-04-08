import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherVehiculeComponent } from './chercher-vehicule.component';

describe('ChercherVehiculeComponent', () => {
  let component: ChercherVehiculeComponent;
  let fixture: ComponentFixture<ChercherVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
