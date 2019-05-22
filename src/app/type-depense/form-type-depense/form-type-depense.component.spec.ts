import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeDepenseComponent } from './form-type-depense.component';

describe('FormTypeDepenseComponent', () => {
  let component: FormTypeDepenseComponent;
  let fixture: ComponentFixture<FormTypeDepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeDepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
