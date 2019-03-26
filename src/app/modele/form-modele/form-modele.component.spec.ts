import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModeleComponent } from './form-modele.component';

describe('FormModeleComponent', () => {
  let component: FormModeleComponent;
  let fixture: ComponentFixture<FormModeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
