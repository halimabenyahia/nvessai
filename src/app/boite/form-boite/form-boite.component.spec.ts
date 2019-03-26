import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBoiteComponent } from './form-boite.component';

describe('FormBoiteComponent', () => {
  let component: FormBoiteComponent;
  let fixture: ComponentFixture<FormBoiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBoiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
