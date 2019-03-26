import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssuranceComponent } from './form-assurance.component';

describe('FormAssuranceComponent', () => {
  let component: FormAssuranceComponent;
  let fixture: ComponentFixture<FormAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
