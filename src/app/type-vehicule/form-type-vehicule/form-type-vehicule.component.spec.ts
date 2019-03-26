import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeVehiculeComponent } from './form-type-vehicule.component';

describe('FormTypeVehiculeComponent', () => {
  let component: FormTypeVehiculeComponent;
  let fixture: ComponentFixture<FormTypeVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
