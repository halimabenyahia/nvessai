import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeVComponent } from './form-type-v.component';

describe('FormTypeVComponent', () => {
  let component: FormTypeVComponent;
  let fixture: ComponentFixture<FormTypeVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
