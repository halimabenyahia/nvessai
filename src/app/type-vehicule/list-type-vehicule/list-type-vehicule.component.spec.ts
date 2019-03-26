import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeVehiculeComponent } from './list-type-vehicule.component';

describe('ListTypeVehiculeComponent', () => {
  let component: ListTypeVehiculeComponent;
  let fixture: ComponentFixture<ListTypeVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
