import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypevehiculeComponent } from './form-typevehicule.component';

describe('FormTypevehiculeComponent', () => {
  let component: FormTypevehiculeComponent;
  let fixture: ComponentFixture<FormTypevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
