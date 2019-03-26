import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypevehiculeComponent } from './typevehicule.component';

describe('TypevehiculeComponent', () => {
  let component: TypevehiculeComponent;
  let fixture: ComponentFixture<TypevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
